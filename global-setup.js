import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";
import { users } from "./fixtures/testData.js";

export default async function globalSetup(config) {
  const baseURL =
    config?.projects?.[0]?.use?.baseURL ||
    config?.use?.baseURL ||
    process.env.BASE_URL ||
    "https://www.saucedemo.com/";

  const storageDir = path.resolve("storage");
  const storagePath = path.join(storageDir, "adminState.json");

  if (!fs.existsSync(storageDir)) fs.mkdirSync(storageDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseURL);
  await page.locator('[data-test="username"]').fill(users.standard.username);
  await page.locator('[data-test="password"]').fill(users.standard.password);
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL(/inventory\.html/);

  await page.context().storageState({ path: storagePath });
  await browser.close();
}
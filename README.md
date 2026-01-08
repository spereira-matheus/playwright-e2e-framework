![Playwright CI - Smoke](https://github.com/spereira-matheus/playwright-e2e-framework/actions/workflows/ci-smoke.yml/badge.svg)

# Playwright E2E Framework (JavaScript)

## Overview
End-to-End automation framework built with Playwright and JavaScript, focused on validating critical user journeys using a risk-based and maintainable testing approach.

This repository demonstrates real-world QA practices rather than tutorial-style examples.

## Tech Stack
- Playwright
- JavaScript (Node.js)
- GitHub Actions (CI)

## Key Features
- Tagged test suites for selective execution (@smoke, @regression, @edge, @api)
- Authentication handled via generated storage state (not committed)
- Faster and more stable tests by avoiding repeated logins
- CI pipeline running smoke tests on every push and pull request
- HTML reporting available as CI artifact

## Setup
```bash
npm ci
npx playwright install
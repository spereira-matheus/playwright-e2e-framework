# Playwright E2E Framework (JavaScript)

## Overview
End-to-End automation framework built with Playwright and JavaScript, designed to validate critical user journeys using a risk-based and maintainable testing approach.

## Tech Stack
- Playwright
- JavaScript (Node.js)

## Key Features
- Tagged test suites for selective execution (@smoke, @regression, @edge, @api)
- Authentication handled via generated storage state (not committed)
- Reduced flakiness and faster execution by avoiding repeated logins
- CI-ready structure with HTML reporting

## Setup
```bash
npm ci
npx playwright install

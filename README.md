# 🔐 Sample Login Automation - Thinkeo (Playwright)

This repository contains automated test scripts for validating the login functionality of [Thinkeo](https://platform.thinkeo.io/login) 
using [Playwright](https://playwright.dev/) with JavaScript.

---

## 📁 Project Structure
Quicksign_playwright/
├── tests/
│ └── quicksign.spec.js # Sample test script
├── playwright.config.js # Playwright config
├── package.json # Project dependencies and scripts
└── README.md # Project documentation


## 🛠️ Setup Instructions

**Clone the repository**
```bash
git clone (https://github.com/Ngll/Quicksign_Playwright.git)
cd Quicksign_playwright

**Install dependencies**
npx playwright install, press enter
npm init playwright@latest, press enter
Select option Javascript
leave other option as it is, press enter.
Run Specific tests in default browser 
npx playwright test ./tests/quicksign.spec.js --project=chromium --headed

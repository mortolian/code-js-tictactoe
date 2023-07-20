# Playwright - Additional Commands

Runs the end-to-end tests.

```bash
npx playwright test
```

Starts the interactive UI mode.

```bash
npx playwright test --ui
```  

Runs the tests only on Desktop Chrome.

```bash
npx playwright test --project=chromium
```

Runs the tests in a specific file.

```bash
npx playwright test example
```

Runs the tests in debug mode.

```bash
npx playwright test --debug
```
Auto generate tests with Codegen.

```bash
npx playwright codegen
```
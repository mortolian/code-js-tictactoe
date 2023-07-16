# TicTacToe Game

This is a simple `HTML`, `CSS`, `JavaScript` based TicTacToe game. <br> 
The game is created as a code challenge.

## Demo

[Github Page Demo Site](https://mortolian.github.io/code-js-tictactoe/)

## Setup

### Clone The Repo

```bash
mkdir code-js-tictactoe
cd code-js-tictactoe
git clone https://github.com/mortolian/code-js-tictactoe.git .
```

### Install Yarn Node Package Manager Globally

```bash
npm install --global yarn
```
For more installation information, [Yarn Install Manual](https://classic.yarnpkg.com/lang/en/docs/install/).

### Run Directly On Host

From the root of the project run the following commands. 
I personally use NPM, because I have not had a need to use anything else.

#### NPM

```bash
cd src
npm install
npm run watch
```

#### YARN

```bash
cd src
yarn install
yarn run watch
```

### Local Docker Developer Setup

- http://localhost:8080
- http://127.0.0.1:8080

```bash
```

Install Docker Desktop [Mac](https://docs.docker.com/desktop/install/mac-install/), [Windows](https://docs.docker.com/desktop/install/windows-install/), [Linux](https://docs.docker.com/desktop/install/linux-install/)

## Run Tests

### End-To-End Tests

```text
Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

```


### Unit Tests

## Compatibility

The game should work on all screen sizes and in most modern browsers.

## Contributions And Feedback

The game is made for me to learn, therefor I am not adding in and contributions, but I do
welcome any feedback through Github.

## References

- https://github.com/tapio/live-server#readme
- https://nodejs.org/ja/blog/release/v16.16.0
- https://github.com/nvm-sh/nvm

## License

The game is the property of Mortolian (Gideon Schoonbee). You are free to copy, modify and use the game
as long as you give me some credit for it.
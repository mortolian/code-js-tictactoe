# TicTacToe Game

This is a simple `HTML`, `CSS`, `ECMA/Vite` based TicTacToe game. <br> 
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

#### NPM

```bash
npm install
npm run dev
```

#### YARN

```bash
yarn
yarn dev
```

## Run Tests

### Eslint

```bash
yarn lint
```

### End-To-End Tests

```bash
yarn playwright
```

or

```bash
npx playwright test
```
- [Playwright Additional Commands](documentation%2Fplaywright.md)
- Visit https://playwright.dev/docs/intro for more information.

### Unit Tests

At this point of the project it is built in plain JavaScript and not ECMA.
This means that there are no unit testing available at this time.

TODO: Rebuild in VITE and ECMA to facilitate the ability to unit test
ECMAScript.

```bash
yarn vitest
```

```bash
yarn run vitest-coverage
```

- Visit https://vitest.dev/guide/ for more information.

## Contributions And Feedback

The game is made for me to learn, therefor I am not adding in and contributions, but I do
welcome any feedback through GitHub.

## References

- https://github.com/tapio/live-server#readme
- https://nodejs.org/ja/blog/release/v16.16.0
- https://github.com/nvm-sh/nvm
- https://vitest.dev
- https://playwright.dev

## License

The game is the property of Mortolian (Gideon Schoonbee). You are free to copy, modify and use the game
as long as you give me some credit for it.
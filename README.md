# Wordle

A small Wordle clone built with React and TypeScript.

The app picks a random five-letter target word, lets the player make up to six guesses, validates guesses against the bundled word list, and colours each submitted row using Wordle-style feedback:

- Green: correct letter in the correct position
- Yellow: correct letter in the wrong position
- Grey: letter is not available in the target word

The row evaluator handles duplicate letters by first marking exact matches, then only marking misplaced letters while there are unmatched copies left in the target word.

## Tech Stack

- React
- TypeScript
- CSS Modules
- Create React App
- Jest and React Testing Library

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Useful Scripts

```bash
npm test
```

Runs the test suite in watch mode.

```bash
npm test -- --watchAll=false
```

Runs the test suite once.

```bash
npm run build
```

Creates a production build in the `build` directory.

```bash
npm run format
```

Formats source files with Prettier.

## Project Structure

```text
src/
  App.tsx
  words.js
  components/
    Cell/
    Container/
    Grid/
    Row/
      utils/
        evaluateRow.ts
        evaluateRow.test.ts
  hooks/
    useKeyPress.ts
```

Key files:

- `src/App.tsx` owns the game state, target word, win/loss checks, and reset flow.
- `src/hooks/useKeyPress.ts` handles keyboard input for letters, backspace, and enter.
- `src/components/Grid/Grid.tsx` renders the six guess rows.
- `src/components/Row/utils/evaluateRow.ts` contains the Wordle feedback logic.
- `src/words.js` contains the accepted uppercase five-letter word list.

## Tests

The evaluator tests cover the most important game-logic cases:

- correct, present, and absent letters
- duplicate letters
- letters already consumed by correct matches
- pending current and unsubmitted rows


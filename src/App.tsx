import { useState } from 'react';
import styles from './App.module.css';
import { useEffect } from 'react';
import { handleKeyPress } from './hooks/useKeyPress';
import { Container } from './components/Container/Container';
import { Grid } from './components/Grid/Grid';
import { WORDS } from './words';

function App() {
  const [words, setWords] = useState<string[]>(Array(6).fill(''));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [targetWord, setTargetWord] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);

  const isLoss = currentWordIndex === 6 && words[currentWordIndex - 1] !== targetWord;
  const isWin = words[currentWordIndex - 1] === targetWord;
  const isGameOver = isLoss || isWin;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyPress({
        key: event.key,
        currentWords: words,
        setWords,
        currentWordIndex,
        setCurrentWordIndex,
        isGameOver,
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentWordIndex, words, isGameOver]);

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <Container>
          {isGameOver && (
            <div className={styles.gameOver}>
              <h2>You {isWin ? 'won!' : 'lost!'}</h2>
              {isLoss && <h3 className={styles.title}>the word was {targetWord}</h3>}
              <button
                onClick={() => {
                  setWords(Array(6).fill(''));
                  setCurrentWordIndex(0);
                  setTargetWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
                }}
              >
                Play Again
              </button>
            </div>
          )}
          <Grid answers={words} targetWord={targetWord} currentWordIndex={currentWordIndex} />
        </Container>
      </main>
    </div>
  );
}

export default App;

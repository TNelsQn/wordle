import { WORDS } from '../words';

type KeyPressProps = {
  key: string;
  currentWords: string[];
  setWords: (words: string[]) => void;
  currentWordIndex: number;
  setCurrentWordIndex: (index: number) => void;
  isGameOver: boolean;
};

export function handleKeyPress({
  key,
  currentWords,
  setWords,
  currentWordIndex,
  setCurrentWordIndex,
  isGameOver,
}: KeyPressProps) {
  if (isGameOver) {
    return;
  }

  if (
    key === 'Enter' &&
    currentWords[currentWordIndex].length === 5 &&
    !WORDS.includes(currentWords[currentWordIndex])
  ) {
    alert('Word not in list');
    return;
  }

  if (key === 'Enter' && currentWords[currentWordIndex].length === 5) {
    setCurrentWordIndex(currentWordIndex + 1);
  }

  if (key === 'Backspace') {
    const updatedWords = [...currentWords];
    updatedWords[currentWordIndex] = updatedWords[currentWordIndex].slice(0, -1);
    setWords(updatedWords);
  }

  if (/^[a-zA-Z]$/.test(key) && currentWords[currentWordIndex].length < 5 && currentWordIndex < 6) {
    const updatedWords = [...currentWords];
    updatedWords[currentWordIndex] += key.toUpperCase();
    setWords(updatedWords);
  }
}

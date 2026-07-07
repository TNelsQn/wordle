import { BoxStyle } from '../../Cell/Cell';

type Props = {
  word: string;
  targetWord: string;
  isCurrentWord: boolean;
};

export const evaluateRow = ({ word, targetWord, isCurrentWord }: Props): BoxStyle[] => {
  if (isCurrentWord || word.length < 5) {
    return Array(5).fill('pending');
  }

  const result: BoxStyle[] = Array(5).fill('absent');
  const remainingLetters: Record<string, number> = {};

  for (let index = 0; index < targetWord.length; index++) {
    if (word[index] === targetWord[index]) {
      result[index] = 'correct';
      continue;
    }

    const letter = targetWord[index];
    remainingLetters[letter] = (remainingLetters[letter] ?? 0) + 1;
  }

  for (let index = 0; index < word.length; index++) {
    const letter = word[index];

    if (result[index] === 'correct' || !remainingLetters[letter]) {
      continue;
    }

    result[index] = 'present';
    remainingLetters[letter]--;
  }

  return result;
};

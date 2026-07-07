import { Cell } from '../Cell/Cell';
import { evaluateRow } from './utils/evaluateRow';
import styles from './Row.module.css';

type Props = { word: string; targetWord: string; isCurrentWord: boolean };

export const Row = ({ word, targetWord, isCurrentWord }: Props) => {
  const currentLength = word.length;
  const letters = [...word.split('').map((char) => char), ...Array(5 - currentLength).fill('')];
  const boxStyles = evaluateRow({ word, targetWord, isCurrentWord });

  return (
    <div className={styles.row}>
      {letters.map((letter, index) => (
        <Cell letter={letter} key={index} boxStyle={boxStyles[index]} />
      ))}
    </div>
  );
};

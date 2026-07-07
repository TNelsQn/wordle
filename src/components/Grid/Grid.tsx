import styles from './Grid.module.css';
import { Row } from '../Row/Row';

type Props = { answers: string[]; targetWord: string; currentWordIndex: number };

export const Grid = ({ answers, targetWord, currentWordIndex }: Props) => {
  const currentLength = answers.length;
  const words = [...answers, ...Array(6 - currentLength).fill('')];

  return (
    <div className={styles.grid} aria-label="word grid">
      {words.map((word, index) => (
        <Row
          word={word}
          key={index}
          targetWord={targetWord}
          isCurrentWord={currentWordIndex === index}
        />
      ))}
    </div>
  );
};

import styles from './Cell.module.css';

export type BoxStyle = 'correct' | 'present' | 'absent' | 'pending';

type Props = { letter: string; boxStyle: BoxStyle };

export const Cell = ({ letter, boxStyle }: Props) => {
  return <div className={styles.cell + ' ' + styles[boxStyle]}>{letter}</div>;
};

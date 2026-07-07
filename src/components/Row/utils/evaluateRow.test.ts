import { evaluateRow } from './evaluateRow';

describe('evaluateRow', () => {
  it('marks correct, present, and absent letters', () => {
    expect(evaluateRow({ word: 'CRANE', targetWord: 'CARDS', isCurrentWord: false })).toEqual([
      'correct',
      'present',
      'present',
      'absent',
      'absent',
    ]);
  });

  it('does not mark more present letters than the target contains', () => {
    expect(evaluateRow({ word: 'ALLEY', targetWord: 'APPLE', isCurrentWord: false })).toEqual([
      'correct',
      'present',
      'absent',
      'present',
      'absent',
    ]);
  });

  it('does not reuse duplicate letters that were already marked correct', () => {
    expect(evaluateRow({ word: 'HELLO', targetWord: 'ADLLL', isCurrentWord: false })).toEqual([
      'absent',
      'absent',
      'correct',
      'correct',
      'absent',
    ]);
  });

  it('keeps the current row pending', () => {
    expect(evaluateRow({ word: 'APPLE', targetWord: 'APPLE', isCurrentWord: true })).toEqual([
      'pending',
      'pending',
      'pending',
      'pending',
      'pending',
    ]);
  });

  it('keeps unsubmitted rows pending', () => {
    expect(evaluateRow({ word: '', targetWord: 'APPLE', isCurrentWord: false })).toEqual([
      'pending',
      'pending',
      'pending',
      'pending',
      'pending',
    ]);
  });
});

import type { CSSProperties } from 'react';
import styles from './SplitFlapText.module.css';

type SplitFlapTextProps = {
  readonly value: string;
  readonly delayMs?: number;
  readonly staggerMs?: number;
  readonly className?: string;
};

type FlapStyle = CSSProperties & {
  '--flap-delay': string;
};

export function SplitFlapText({
  value,
  delayMs = 0,
  staggerMs = 14,
  className,
}: SplitFlapTextProps) {
  const occurrenceByCharacter = new Map<string, number>();
  const characters = Array.from(value, (character) => {
    const occurrence = (occurrenceByCharacter.get(character) ?? 0) + 1;
    occurrenceByCharacter.set(character, occurrence);

    return { character, id: `${character}-${occurrence}` };
  });
  const rootClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <span className={rootClassName}>
      <span className={styles.visuallyHidden}>{value}</span>
      <span className={styles.characters} aria-hidden="true">
        {characters.map(({ character, id }, index) => {
          const visibleCharacter = character === ' ' ? '\u00a0' : character;
          const flapStyle: FlapStyle = {
            '--flap-delay': `${delayMs + index * staggerMs}ms`,
          };

          return (
            <span
              className={`${styles.character} ${character === ' ' ? styles.space : ''}`}
              key={id}
              style={flapStyle}
            >
              <span className={`${styles.half} ${styles.settledTop}`}>
                <span>{visibleCharacter}</span>
              </span>
              <span className={`${styles.half} ${styles.settledBottom}`} />
              <span className={`${styles.half} ${styles.departingHalf}`} />
              <span className={`${styles.half} ${styles.arrivingHalf}`}>
                <span>{visibleCharacter}</span>
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}

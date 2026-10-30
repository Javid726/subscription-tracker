import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SplitFlapLab.module.css';
import { SplitFlapText } from './SplitFlapText';

export function SplitFlapLab() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Component test page</p>
          <h1 className={styles.title}>Split-flap lab</h1>
        </div>
        <Link className={styles.boardLink} to="/">
          Back to board
        </Link>
      </header>

      <section className={styles.workspace} aria-labelledby="flap-preview-heading">
        <div className={styles.workspaceHeader}>
          <div>
            <h2 id="flap-preview-heading" className={styles.sectionTitle}>
              Board-size preview
            </h2>
            <p className={styles.description}>
              Characters enter once from an empty state at the board's 44px row height.
            </p>
          </div>
          <button
            className={styles.replayButton}
            type="button"
            onClick={() => setReplayKey((currentKey) => currentKey + 1)}
          >
            Replay
          </button>
        </div>

        <div className={styles.preview} key={replayKey}>
          <div className={styles.boardRow}>
            <SplitFlapText value="11 OCT" />
            <SplitFlapText value="SPOTIFY PREMIUM" delayMs={70} />
            <SplitFlapText value="MONTHLY" delayMs={140} />
            <SplitFlapText value="$11.99" delayMs={210} />
          </div>

          <div className={styles.totalPanel}>
            <span className={styles.totalLabel}>Annual fare</span>
            <SplitFlapText className={styles.totalValue} value="$2,178" delayMs={140} />
          </div>
        </div>
      </section>
    </main>
  );
}

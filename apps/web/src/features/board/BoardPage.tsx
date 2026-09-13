import styles from './BoardPage.module.css';
import { BoardTable } from './BoardTable';
import { staticServiceRows } from './staticData';

export default function BoardPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerBrand}>
          <h1 className={styles.abfahrt}>Abfahrt</h1>
          <p className={styles.stationLine}>Subscription Index — Departures</p>
        </div>
      </header>
      <div className={styles.wall}>
        <section
          aria-labelledby="next-departure-heading"
          className={`${styles.panel} ${styles.nextDeparture}`}
        >
          <h2 id="next-departure-heading">Next Departure</h2>
        </section>
        <section
          aria-labelledby="annual-fare-heading"
          className={`${styles.panel} ${styles.annualFare}`}
        >
          <h2 id="annual-fare-heading">Annual Fare</h2>
        </section>
        <section aria-labelledby="departures-heading" className={styles.departures}>
          <h2 id="departures-heading">Departures</h2>
          <BoardTable rows={staticServiceRows} />
        </section>
        <section
          aria-labelledby="service-notices-heading"
          className={`${styles.panel} ${styles.bottomPanel}`}
        >
          <h2 id="service-notices-heading">Service Notices</h2>
        </section>
        <section
          aria-labelledby="fare-by-line-heading"
          className={`${styles.panel} ${styles.bottomPanel}`}
        >
          <h2 id="fare-by-line-heading">Fare by Line</h2>
        </section>
        <section
          aria-labelledby="cancellation-heading"
          className={`${styles.panel} ${styles.bottomPanel}`}
        >
          <h2 id="cancellation-heading">Cancellations</h2>
        </section>
      </div>
    </main>
  );
}

import styles from './BoardPage.module.css';
import { BoardTable } from './BoardTable';
import { BrandMark } from './BrandMark';
import {
  annualFare,
  boardDate,
  cancellationCandidates,
  fareByLine,
  nextDeparture,
  serviceNotices,
  staticServiceRows,
} from './staticData';

export default function BoardPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerBrand}>
          <h1 className={styles.abfahrt}>Abfahrt</h1>
          <p className={styles.stationLine}>Subscription Index — Departures</p>
        </div>
        <div className={styles.headerMeta}>
          <span>{boardDate}</span>
          <span>{staticServiceRows.length} services in traffic</span>
          <span className={styles.operations}>Operations</span>
        </div>
      </header>

      <div className={styles.wall}>
        <section
          aria-labelledby="next-departure-heading"
          className={`${styles.panel} ${styles.nextDeparture}`}
        >
          <div className={styles.panelHeadingRow}>
            <h2 id="next-departure-heading" className={styles.panelHeading}>
              Next Departure
            </h2>
            <div className={styles.mobileAnnualFare}>
              <span>Annual fare</span>
              <strong>{annualFare.total}</strong>
            </div>
          </div>
          <div className={styles.nextContent}>
            <BrandMark
              brandKey={nextDeparture.brandKey}
              label={nextDeparture.serviceName}
              size="hero"
              useBrandColor
            />
            <div className={styles.nextIdentity}>
              <p className={styles.nextName}>{nextDeparture.serviceName}</p>
              <p className={styles.supportingText}>{nextDeparture.departureSummary}</p>
            </div>
            <div className={styles.nextFare}>
              <strong>{nextDeparture.fareLabel}</strong>
              <span>{nextDeparture.cycleSummary}</span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="annual-fare-heading"
          className={`${styles.panel} ${styles.annualFare}`}
        >
          <div className={styles.panelHeadingRow}>
            <h2 id="annual-fare-heading" className={styles.panelHeading}>
              Annual Fare
            </h2>
            <span className={styles.panelCode}>2026</span>
          </div>
          <p className={styles.annualTotal}>{annualFare.total}</p>
          <div className={styles.annualMeta}>
            <span>{annualFare.monthlyEquivalent}</span>
            <span className={styles.signalText}>{annualFare.change}</span>
          </div>
        </section>

        <section aria-label="Upcoming departures" className={styles.departures}>
          <BoardTable rows={staticServiceRows} />
        </section>

        <section
          aria-labelledby="service-notices-heading"
          className={`${styles.panel} ${styles.bottomPanel} ${styles.notices}`}
        >
          <div className={styles.panelHeadingRow}>
            <h2 id="service-notices-heading" className={styles.panelHeading}>
              Service Notices
            </h2>
            <span className={styles.panelCode}>03</span>
          </div>
          <ul className={styles.panelList}>
            {serviceNotices.map((notice) => (
              <li className={styles.panelItem} key={notice.id}>
                <BrandMark brandKey={notice.brandKey} label={notice.serviceName} size="panel" />
                <div className={styles.itemCopy}>
                  <strong>{notice.serviceName}</strong>
                  <span>{notice.detail}</span>
                </div>
                <span className={notice.isWarning ? styles.signalAmount : styles.itemAmount}>
                  {notice.amount}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="fare-by-line-heading"
          className={`${styles.panel} ${styles.bottomPanel} ${styles.fares}`}
        >
          <div className={styles.panelHeadingRow}>
            <h2 id="fare-by-line-heading" className={styles.panelHeading}>
              Fare by Line
            </h2>
            <span className={styles.panelCode}>Annual</span>
          </div>
          <ul className={styles.panelList}>
            {fareByLine.map((line) => (
              <li className={`${styles.panelItem} ${styles.lineItem}`} key={line.id}>
                <span className={styles.lineCode}>{line.lineName.slice(0, 2).toUpperCase()}</span>
                <div className={styles.itemCopy}>
                  <strong>{line.lineName}</strong>
                  <span>{line.detail}</span>
                </div>
                <span className={styles.itemAmount}>{line.amount}</span>
              </li>
            ))}
          </ul>
          <p className={styles.panelFootnote}>and 2 more lines · {annualFare.total} total</p>
        </section>

        <section
          aria-labelledby="cancellations-heading"
          className={`${styles.panel} ${styles.bottomPanel} ${styles.cancellations}`}
        >
          <div className={styles.panelHeadingRow}>
            <h2 id="cancellations-heading" className={styles.panelHeading}>
              Cancellations
            </h2>
            <span className={styles.panelCode}>Candidates</span>
          </div>
          <ul className={styles.panelList}>
            {cancellationCandidates.map((candidate) => (
              <li className={styles.panelItem} key={candidate.id}>
                <BrandMark
                  brandKey={candidate.brandKey}
                  label={candidate.serviceName}
                  size="panel"
                />
                <div className={styles.itemCopy}>
                  <strong>{candidate.serviceName}</strong>
                  <span>{candidate.detail}</span>
                </div>
                <span className={candidate.isWarning ? styles.signalAmount : styles.itemAmount}>
                  {candidate.amount}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className={styles.footer}>
        <span>Static demonstration board</span>
        <span>Board clear after 29 Oct</span>
      </footer>
    </main>
  );
}

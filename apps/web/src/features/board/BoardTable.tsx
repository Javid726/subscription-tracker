import styles from './BoardTable.module.css';
import type { StaticServiceRow } from './staticData';

type BoardTableProps = {
  readonly rows: readonly StaticServiceRow[];
};

export function BoardTable({ rows }: BoardTableProps) {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <div className={styles.captionContent}>
          <h2 id="departures-heading" className={styles.captionTitle}>
            Departures Board
          </h2>
          <span className={styles.captionCount}>Next 30 days &mdash; {rows.length} departures</span>
        </div>
      </caption>
      <colgroup>
        <col className={styles.departureColumn} />
        <col className={styles.serviceColumn} />
        <col className={styles.cycleColumn} />
        <col className={styles.fareColumn} />
      </colgroup>
      <thead className={styles.columnHeading}>
        <tr>
          <th className={styles.departureHeading} scope="col">
            Departs
          </th>
          <th className={styles.serviceHeading} scope="col">
            Service
          </th>
          <th className={styles.cycleHeading} scope="col">
            Cycle
          </th>
          <th className={styles.fareHeading} scope="col">
            Fare
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className={styles.bodyRow} key={row.id} data-flagged={row.isFlagged ? '' : undefined}>
            <td className={styles.departureCell}>{row.departureLabel}</td>
            <th className={styles.serviceCell} scope="row">
              {row.isFlagged && (
                <span className={styles.visuallyHidden}>Cancellation candidate: </span>
              )}
              {row.serviceName}
            </th>
            <td className={styles.cycleCell}>{row.cycleLabel}</td>
            <td className={styles.fareCell}>{row.fareLabel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

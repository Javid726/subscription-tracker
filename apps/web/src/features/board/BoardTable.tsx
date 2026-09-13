import type { StaticServiceRow } from './staticData';

type BoardTableProps = {
  readonly rows: readonly StaticServiceRow[];
};

export function BoardTable({ rows }: BoardTableProps) {
  return (
    <table>
      <caption>Next 30 days &mdash; {rows.length} departures</caption>
      <thead>
        <tr>
          <th scope="col">Departs</th>
          <th scope="col">Service</th>
          <th scope="col">Cycle</th>
          <th scope="col">Fare</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} data-flagged={row.isFlagged ? '' : undefined}>
            <td>{row.departureLabel}</td>
            <th scope="row">{row.serviceName}</th>
            <td>{row.cycleLabel}</td>
            <td>{row.fareLabel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

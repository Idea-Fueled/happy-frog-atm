type Cell =
  | { kind: 'yes'; text: string }
  | { kind: 'no'; text: string }
  | { kind: 'maybe'; text: string }
  | { kind: 'feature'; text: string };

interface Row {
  feature: string;
  hf: Cell;
  std: Cell;
  buy: Cell;
  none: Cell;
}

const rows: Row[] = [
  {
    feature: 'Cannabis-compliant banking',
    hf: { kind: 'yes', text: '✓ Yes' },
    std: { kind: 'no', text: '✗ Rarely' },
    buy: { kind: 'maybe', text: '~ You arrange' },
    none: { kind: 'no', text: 'N/A' },
  },
  {
    feature: 'Equipment cost to your store',
    hf: { kind: 'yes', text: '✓ $0' },
    std: { kind: 'maybe', text: '~ Varies' },
    buy: { kind: 'no', text: '$3K–$5K upfront' },
    none: { kind: 'no', text: 'N/A' },
  },
  {
    feature: 'Cash loading & replenishment',
    hf: { kind: 'yes', text: '✓ Included' },
    std: { kind: 'maybe', text: '~ Sometimes' },
    buy: { kind: 'no', text: '✗ Your staff' },
    none: { kind: 'no', text: 'N/A' },
  },
  {
    feature: 'Monthly commission paid to store',
    hf: { kind: 'yes', text: '✓ Yes' },
    std: { kind: 'no', text: '✗ Rarely' },
    buy: { kind: 'yes', text: '✓ You keep it all' },
    none: { kind: 'no', text: '$0' },
  },
  {
    feature: '24/7 monitoring & rapid service',
    hf: { kind: 'yes', text: '✓ Yes' },
    std: { kind: 'maybe', text: '~ Limited' },
    buy: { kind: 'no', text: '✗ You handle it' },
    none: { kind: 'no', text: 'N/A' },
  },
  {
    feature: 'Risk of mid-month shutdown',
    hf: { kind: 'yes', text: '✓ None' },
    std: { kind: 'no', text: '✗ Common' },
    buy: { kind: 'maybe', text: '~ Depends' },
    none: { kind: 'no', text: 'N/A' },
  },
  {
    feature: 'Cash & equipment insured',
    hf: { kind: 'yes', text: '✓ Yes' },
    std: { kind: 'maybe', text: '~ Varies' },
    buy: { kind: 'no', text: '✗ Your policy' },
    none: { kind: 'no', text: 'N/A' },
  },
  {
    feature: 'Customers who walk out for cash',
    hf: { kind: 'yes', text: '✓ Eliminated' },
    std: { kind: 'yes', text: '✓ Eliminated' },
    buy: { kind: 'yes', text: '✓ Eliminated' },
    none: { kind: 'no', text: '✗ Frequent' },
  },
];

function renderCell(c: Cell) {
  return <span className={c.kind}>{c.text}</span>;
}

export default function Comparison() {
  return (
    <section className="cmp-sec">
      <div className="stag">How We Compare</div>
      <h2 className="sh2">
        Happy Frog vs
        <br />
        <span className="olive">The Alternatives</span>
      </h2>
      <div style={{ overflowX: 'auto' }}>
        <table className="ctbl">
          <thead>
            <tr>
              <th className="cf" style={{ width: '32%' }}>
                Feature
              </th>
              <th className="cu" style={{ width: '19%' }}>
                Happy Frog ATM
              </th>
              <th className="co" style={{ width: '17%' }}>
                Standard ATM Operator
              </th>
              <th className="co" style={{ width: '16%' }}>
                Buy Your Own ATM
              </th>
              <th className="co" style={{ width: '16%' }}>
                No ATM On-Site
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature}>
                <td className="cf">{r.feature}</td>
                <td className="cu">{renderCell(r.hf)}</td>
                <td>{renderCell(r.std)}</td>
                <td>{renderCell(r.buy)}</td>
                <td>{renderCell(r.none)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

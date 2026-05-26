const stats = [
  {
    n: '+20',
    unit: '%',
    label: 'More spent on average by customers who use an in-store ATM',
  },
  {
    n: '10',
    unit: '%',
    label:
      'Of customers who leave to find cash never return to complete the purchase',
  },
  {
    n: '80',
    unit: '%',
    label: 'Of U.S. adults regularly carry and use an ATM card',
  },
  {
    n: '+8',
    unit: '%',
    label:
      'Average sales lift reported by dispensaries after on-site ATM placement',
  },
];

export default function Stats() {
  return (
    <section className="stats-sec">
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="statc" key={s.label}>
            <div className="statn">
              {s.n}
              <span className="unit">{s.unit}</span>
            </div>
            <div className="statl">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="stats-foot">
        Industry estimates — actual results vary by location, foot traffic, and
        product mix.
      </p>
    </section>
  );
}

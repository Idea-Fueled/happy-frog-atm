const specs = [
  {
    n: '01',
    title: 'EMV chip-compliant',
    body:
      'Every machine meets current EMV security standards. Customers use chip cards, PIN debit, and standard ATM cards without friction.',
  },
  {
    n: '02',
    title: 'Trusted hardware brands',
    body:
      'We source from Genmega, Hyosung, and Nautilus — the same manufacturers used by major financial institutions nationwide.',
  },
  {
    n: '03',
    title: 'Sized to your volume',
    body:
      'We assess your foot traffic before placement and select a cassette capacity that holds for your busiest days, not just your average ones.',
  },
  {
    n: '04',
    title: 'Live in 10–14 business days',
    body:
      'Once paperwork is signed, the ATM ships immediately. Most dispensaries are processing transactions within two weeks of signing.',
  },
];

export default function Equipment() {
  return (
    <section className="eq-sec" id="equipment">
      <div className="eq-hdr">
        <div className="stag">The Equipment</div>
        <h2 className="sh2">
          Industry-grade ATMs{' '}
          <br />
          <span className="olive">Sized to your traffic</span>
        </h2>
        <p className="slead">
          We match the right machine to your dispensary&apos;s volume so the
          cash cassette never runs dry on your busiest day. All machines are
          EMV-certified and sourced from the same manufacturers used by major
          financial institutions nationwide.
        </p>
      </div>
      <ul className="eq-list">
        {specs.map((s) => (
          <li key={s.n}>
            <div className="eq-num">{s.n}</div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

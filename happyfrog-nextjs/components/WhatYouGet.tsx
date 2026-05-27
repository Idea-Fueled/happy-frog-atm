const items = [
  {
    n: '01',
    ico: '⬛',
    title: 'Free ATM Placement',
    body:
      'We supply, deliver, and professionally install an EMV-ready ATM. No equipment purchase, no installation fee, no deposit of any kind.',
  },
  {
    n: '02',
    ico: '$',
    title: 'Monthly Commission',
    body:
      'Your dispensary earns a commission on every withdrawal. Paid monthly with a clear statement — no invoicing, no chasing required.',
  },
  {
    n: '03',
    ico: '✓',
    title: 'Cannabis-Compliant Banking',
    body:
      'We work exclusively with banking and processing partners approved for cannabis transactions. No grey areas, no mid-month shutdowns.',
  },
  {
    n: '04',
    ico: '⊙',
    title: 'Full Cash Management',
    body:
      'Loading and replenishment run on a proactive schedule managed by our team. Your staff never needs to think about the ATM after install day.',
  },
  {
    n: '05',
    ico: '◉',
    title: '24/7 Remote Monitoring',
    body:
      'Every machine is monitored remotely. We spot issues before they become outages and dispatch on-site service quickly when needed.',
  },
  {
    n: '06',
    ico: '▣',
    title: 'Fully Insured Equipment',
    body:
      'The ATM and the cash inside it are covered by our insurance. Your store remains responsible only for standard premises security.',
  },
];

export default function WhatYouGet() {
  return (
    <section className="what-sec" id="included">
      <div className="what-hdr">
        <div className="stag">What&apos;s Included</div>
        <h2 className="sh2">
          Six things you get{' '}
          <br />
          <span className="olive">at zero cost</span>
        </h2>
        <p className="slead" style={{ marginTop: '1rem' }}>
          We&apos;re a full-service partner, not just an equipment supplier.
          Here is exactly what is covered from day one — no upsells, no surprise
          invoices.
        </p>
      </div>
      <div className="what-grid">
        {items.map((it) => (
          <div className="wc" key={it.n}>
            <div className="wnum">{it.n}</div>
            <div className="wico">{it.ico}</div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

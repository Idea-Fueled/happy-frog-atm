const steps = [
  {
    n: '01',
    title: 'Free Placement',
    body:
      'We confirm your license, ship the ATM, and professionally install it on-site with cannabis-compliant banking already in place.',
  },
  {
    n: '02',
    title: 'Always Stocked',
    body:
      'Our team monitors cash levels remotely and refills the machine before it runs low — ahead of your busiest hours, not after.',
  },
  {
    n: '03',
    title: 'Fixed Fast',
    body:
      "24/7 monitoring catches issues before your customers do. On-site service follows within hours, not days. You don't make the call — we already know.",
  },
  {
    n: '04',
    title: 'You Get Paid',
    body:
      'A commission on every cash withdrawal is deposited monthly with a clean statement. No invoicing, no follow-up, no effort.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-sec" id="how">
      <div className="stag">How It Works</div>
      <h2 className="sh2">
        We handle everything
        <br />
        <span className="olive">You just earn</span>
      </h2>
      <p className="slead">
        From the first phone call to your monthly commission deposit, not a
        single operational task lands on your team.
      </p>
      <div className="steps">
        {steps.map((s) => (
          <div className="step" key={s.n}>
            <div className="snum">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

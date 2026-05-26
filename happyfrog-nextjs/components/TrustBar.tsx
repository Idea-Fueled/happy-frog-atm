const items = [
  'Nationwide Coverage',
  'Cannabis-Compliant Banking',
  'EMV-Certified Hardware',
  'Cash Loading Included',
  'Fully Insured Equipment',
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {items.map((label) => (
        <div className="ti" key={label}>
          <span className="tck">✓</span> {label}
        </div>
      ))}
    </div>
  );
}

import { siteConfig } from './site-config';
import { CalendarIcon, ShieldIcon } from './Icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hbg" aria-hidden />
      <div className="hglow" aria-hidden />
      <div className="hero-left">
        <div className="sbadge">
          <span className="sdot" />
          <span>Cannabis-Compliant ATM Placement</span>
        </div>
        <h1>
          Free ATMs{' '}
          <br />
          For Licensed{' '}
          <br />
          <span className="olive">Cannabis Dispensaries</span>
        </h1>
        <p className="hsub">
          We supply, install, and fully manage EMV-ready ATMs at zero cost to
          your store — and pay you a <strong>monthly commission</strong> on
          every cash withdrawal. Compliant banking, real hardware, and no
          operational work on your end.
        </p>
        <div className="hactions">
          <a href="#contact" className="btn-p">
            Request Your Free ATM →
          </a>
          <a
            href={siteConfig.scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-o"
          >
            <CalendarIcon />
            Schedule a Call
          </a>
          <a href="#how" className="btn-link">
            See How It Works →
          </a>
        </div>
        <div className="hrisk">
          <ShieldIcon style={{ color: 'var(--olive3)', marginTop: 2 }} />
          <span>
            No equipment cost · No credit check · Live within 10–14 business
            days · You keep the floor space, we handle the rest
          </span>
        </div>
      </div>
      <div className="hero-right">
        <div className="pcard">
          <div className="pcard-hdr">
            <div className="pch-title">Your Investment</div>
            <div className="pch-badge">Zero Cost</div>
          </div>
          <div className="pcard-body">
            <div className="pmain">
              <div className="pdollar">$</div>
              <div className="pnum">0</div>
            </div>
            <p className="psub">
              Equipment, install, cash loading, monitoring, and repairs — all
              included.{' '}
              <strong>You earn a commission on every transaction.</strong>
            </p>
            <div className="prows">
              <Row label="ATM equipment" value="$0" />
              <Row label="Installation" value="$0" />
              <Row label="Cash management" value="$0" />
              <Row label="Maintenance & service" value="$0" />
              <Row label="Monthly commission" value="Paid to you" hot />
            </div>
            <a href="#contact" className="ccta">
              Request ATM Installation →
            </a>
            <p className="cnote">
              Response within 1 business day <span style={{ whiteSpace: 'nowrap' }}>· No obligation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  hot = false,
}: {
  label: string;
  value: string;
  hot?: boolean;
}) {
  return (
    <div className="pr">
      <span className="prl">{label}</span>
      <span className={hot ? 'prv hot' : 'prv'}>{value}</span>
    </div>
  );
}

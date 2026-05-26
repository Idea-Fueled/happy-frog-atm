import { siteConfig } from './site-config';
import { CalendarIcon, PhoneIcon } from './Icons';

export default function FinalCTA() {
  return (
    <section className="final-sec">
      <div className="stag">Ready to Get Started</div>
      <h2 className="sh2">
        Put a free, compliant ATM
        <br />
        <span className="olive">in your dispensary</span>
      </h2>
      <p className="slead">
        Fill out the form below or call us directly. We&apos;ll confirm your
        location qualifies and walk you through the placement process. No
        obligation.
      </p>
      <div className="factions">
        <a href="#contact" className="btn-p">
          Request Free Placement →
        </a>
        <a
          href={siteConfig.scheduleUrl}
          className="btn-o"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CalendarIcon />
          Schedule a Call
        </a>
        <a href={siteConfig.phone.tel} className="btn-o">
          <PhoneIcon />
          Call {siteConfig.phone.display}
        </a>
      </div>
    </section>
  );
}

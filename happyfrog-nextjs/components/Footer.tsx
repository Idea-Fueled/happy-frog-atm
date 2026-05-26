import Image from 'next/image';
import { siteConfig } from './site-config';
import { PhoneIcon } from './Icons';

export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <Image
            src="/assets/logo.png"
            alt="Happy Frog ATM"
            width={172}
            height={50}
          />
          <p>
            Free, fully managed ATM placement for licensed cannabis
            dispensaries. Compliant banking, monthly commissions, zero hassle.
          </p>
          <div className="foot-contact">
            <a href={siteConfig.phone.tel} className="foot-phone">
              <PhoneIcon width={16} height={16} />
              {siteConfig.phone.display}
            </a>
            <a href={siteConfig.email.mailto}>{siteConfig.email.display}</a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Get Started</h4>
          <ul>
            <li>
              <a href="#contact">Request Free Placement</a>
            </li>
            <li>
              <a
                href={siteConfig.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
            </li>
            <li>
              <a href={siteConfig.phone.tel}>Call {siteConfig.phone.display}</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#included">Free ATM Placement</a>
            </li>
            <li>
              <a href="#included">Cash Management</a>
            </li>
            <li>
              <a href="#included">Revenue Share</a>
            </li>
            <li>
              <a href="#included">Maintenance &amp; Repair</a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Coverage</h4>
          <ul>
            <li>
              <a href="#contact">Nationwide Placement</a>
            </li>
            <li>
              <a href="#contact">Multi-Location Operators</a>
            </li>
            <li>
              <a href={siteConfig.phone.tel}>Call to Confirm Your Market</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <div>© {new Date().getFullYear()} Happy Frog ATM, Inc. All rights reserved.</div>
        <div>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

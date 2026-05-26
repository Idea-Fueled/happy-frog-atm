import Image from 'next/image';
import { siteConfig } from './site-config';
import { PhoneIcon } from './Icons';

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="nav-logo">
        <Image
          src="/assets/logo.png"
          alt="Happy Frog ATM"
          width={158}
          height={46}
          priority
        />
      </div>
      <div className="nav-links">
        <a href="#how">How It Works</a>
        <a href="#included">What&apos;s Included</a>
        <a href="#equipment">Equipment</a>
        <a href="#faq">FAQ</a>
        <a
          href={siteConfig.phone.tel}
          className="nav-phone"
          aria-label={`Call ${siteConfig.phone.display}`}
        >
          <PhoneIcon width={14} height={14} />
          <span className="nav-phone-num">{siteConfig.phone.display}</span>
        </a>
        <a href="#contact" className="nav-cta">
          Get a Free ATM →
        </a>
      </div>
    </nav>
  );
}

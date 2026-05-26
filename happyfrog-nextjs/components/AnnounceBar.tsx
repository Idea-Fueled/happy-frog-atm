import { siteConfig } from './site-config';
import { PhoneIcon } from './Icons';

export default function AnnounceBar() {
  return (
    <div className="announce-bar">
      <span>Free ATM consultation for licensed cannabis dispensaries</span>
      <span className="ab-sep">·</span>
      <a href={siteConfig.phone.tel} className="ab-phone">
        <PhoneIcon width={13} height={13} />
        Call {siteConfig.phone.display}
      </a>
    </div>
  );
}

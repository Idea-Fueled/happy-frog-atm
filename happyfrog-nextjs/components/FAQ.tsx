'use client';

import { useState } from 'react';
import { siteConfig } from './site-config';

interface QA {
  q: string;
  a: string;
}

const qas: QA[] = [
  {
    q: 'Does the ATM really cost nothing?',
    a:
      "Yes. The ATM is provided free of charge once your placement agreement is signed. There is no equipment purchase, no installation fee, and no monthly bill. We generate revenue from the surcharge customers pay on each withdrawal, and we share a portion of that with your dispensary as a monthly commission.",
  },
  {
    q: 'How long does setup actually take?',
    a:
      'Most licensed dispensaries are live within 10 to 14 business days from signing. That window includes shipping, professional installation, bank-side enrollment, and a brief on-site test run. We coordinate everything around your store hours.',
  },
  {
    q: 'Is your ATM service truly cannabis-compliant?',
    a:
      'Yes. We work exclusively with banking and processing partners that are fully approved for cannabis-related ATM placements. We do not place machines through general-purpose processors that could shut down your transactions mid-month.',
  },
  {
    q: 'How much will my dispensary actually earn each month?',
    a:
      `Commission depends on your transaction volume, which is driven by foot traffic and average ticket size. We'll quote you a specific commission rate after a quick review of your location. Call us at ${siteConfig.phone.display} for an estimate.`,
  },
  {
    q: 'My bank shut down a previous ATM at my store. Will yours work?',
    a:
      "Almost certainly yes. The shutdowns you've seen typically come from processors that aren't cannabis-approved. Our processing relationships are built specifically for licensed cannabis retail, so a prior shutdown at your store is not a disqualifier.",
  },
  {
    q: 'Where do you place ATMs?',
    a:
      `We place cannabis-compliant ATMs in licensed dispensaries nationwide. If your state has legal cannabis retail, we can almost certainly serve you. Call ${siteConfig.phone.display} and we'll confirm coverage for your specific market and dispensary location.`,
  },
  {
    q: 'Who is responsible if the ATM is broken into?',
    a:
      'We are. Both the ATM hardware and the cash inside it are covered by our insurance. Your dispensary remains responsible only for the standard physical security of the premises — the same security you already provide.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-sec">
      <div className="stag">Common Questions</div>
      <h2 className="sh2">
        Everything dispensary operators
        <br />
        <span className="olive">ask before signing</span>
      </h2>
      <div className="faq-wrap">
        {qas.map((qa, i) => {
          const open = i === openIndex;
          return (
            <div className={open ? 'faqitem open' : 'faqitem'} key={qa.q}>
              <button
                className="faqq"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
              >
                {qa.q}
                <div className="faqicon">+</div>
              </button>
              <div className="faqa">{qa.a}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

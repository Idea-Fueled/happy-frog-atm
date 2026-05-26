'use client';

import { useState, FormEvent } from 'react';

const perks = [
  'Location qualified within 1 business day',
  'Free walkthrough of the placement process',
  'Compliant banking confirmed before install',
  'No equipment cost, no monthly bill',
  'Live and processing transactions in 10–14 days',
];

const licenseOptions = [
  'Licensed and operational',
  'License approved, pre-opening',
  'License application in progress',
  'Other / not sure',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // TODO (developer): wire this up to your form backend.
  // Options:
  //   - Next.js Server Action (recommended) — see /app/actions/submit-lead.ts pattern
  //   - Formspree:  fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })
  //   - HubSpot Forms API
  //   - Netlify Forms (add name="lead" netlify to <form>)
  //   - Direct email via Resend / Postmark / Sendgrid
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Placeholder — replace with real submission:
    console.log('Form submission (replace with backend call):', Object.fromEntries(formData));
    setSubmitted(true);
  }

  return (
    <section id="contact" className="form-sec">
      <div className="fwrap">
        <div className="form-left">
          <div className="stag">Get Started</div>
          <h2 className="sh2">
            Order your
            <br />
            <span className="olive">free ATM</span>
          </h2>
          <p className="slead">
            Fill out the short form and we&apos;ll confirm your dispensary
            qualifies for free placement, then schedule a brief call to walk
            through the next steps.
          </p>
          <ul className="fperks">
            {perks.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <form className="cform" onSubmit={handleSubmit}>
          <div className="frow">
            <div className="ff">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" required />
            </div>
            <div className="ff">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" required />
            </div>
          </div>
          <div className="ff">
            <label htmlFor="dispensary">Dispensary Name</label>
            <input id="dispensary" name="dispensary" type="text" required />
          </div>
          <div className="frow">
            <div className="ff">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" required />
            </div>
            <div className="ff">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="ff">
            <label htmlFor="address">Dispensary Address (City + State)</label>
            <input id="address" name="address" type="text" required />
          </div>
          <div className="ff">
            <label htmlFor="license">License Status</label>
            <select id="license" name="license" required defaultValue="">
              <option value="" disabled>
                Select your status...
              </option>
              {licenseOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="ff">
            <label htmlFor="notes">Anything we should know? (optional)</label>
            <textarea id="notes" name="notes" />
          </div>
          <button
            type="submit"
            className="subbtn"
            disabled={submitted}
            style={
              submitted
                ? { background: 'var(--olive3)' }
                : undefined
            }
          >
            {submitted
              ? '✓ Received — we will be in touch within 1 business day.'
              : 'Request Free ATM Placement →'}
          </button>
          <div className="subnote">
            Your information stays private — no spam, ever. Response within 1
            business day.
          </div>
        </form>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Happy Frog ATM',
  description: 'Understand the terms, guidelines, and responsibilities governing our free ATM partnership.',
};

export default function TermsPage() {
  return (
    <>
      <div className="legal-back-bar">
        <div className="nav-logo">
          <Link href="/" style={{ display: 'block' }}>
            <Image
              src="/assets/logo.png"
              alt="Happy Frog ATM"
              width={158}
              height={46}
              priority
            />
          </Link>
        </div>
        <a href="/" className="back-btn">
          ← Back
        </a>
      </div>
      <main>
        <section className="legal-hero">
          <h1>Terms of Service</h1>
          <p>
            Effective Date: May 27, 2026. These Terms govern your application, placement request, and operational partnership with Happy Frog ATM.
          </p>
        </section>

        <article className="legal-body">
          <div className="legal-section">
            <h2>1. Agreement & Services Overview</h2>
            <p>
              By accessing this website, submitting an ATM placement form, or entering into an agreement with Happy Frog ATM, you agree to these Terms. Happy Frog ATM provides state-licensed dispensaries with a turnkey, fully managed ATM service. This includes the supply of EMV-ready ATM hardware, professional installation, automated cash loading, software monitoring, and surcharge fee split operations.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Location & Placement Eligibility</h2>
            <p>
              To qualify for our free ATM placement model, your store must fulfill the following operational criteria:
            </p>
            <ul>
              <li><strong>Valid Licensing:</strong> Fulfill and maintain all local and state cannabis regulatory license credentials.</li>
              <li><strong>Dedicated Footprint:</strong> Provide a stable, secure, standard indoor floor footprint equipped with dedicated power and a clean line of sight for security monitoring.</li>
              <li><strong>Secure Premises:</strong> Maintain standard facility security, including professional surveillance recording and operational alarm systems.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Equipment Ownership and Access</h2>
            <p>
              All ATM hardware, internal cassettes, vault cash, network routers, and promotional branding materials supplied by Happy Frog ATM remain the **sole and exclusive property** of Happy Frog ATM. Dispensaries are granted a temporary license to host the equipment. You agree to:
            </p>
            <ul>
              <li>Refrain from moving, modifying, tampering with, or placing liens against the ATM hardware.</li>
              <li>Provide authorized Happy Frog ATM service crews, technicians, and armored cash loading officers with prompt access during operational business hours.</li>
              <li>Notify our support team immediately in the event of hardware malfunction, electrical failure, or visual vandalism.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Surcharge Revenue Share & Payments</h2>
            <p>
              Happy Frog ATM handles all card processor billing and collects cash withdrawal surcharge fees directly. We pay our host dispensaries a monthly commission on every settled cash withdrawal transaction, as outlined in your individual ATM Placement Agreement. Payouts are reconciled monthly and settled via direct ACH bank transfer within fifteen (15) days of the subsequent calendar month.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Disclaimer & Limitation of Liability</h2>
            <p>
              While Happy Frog ATM strives to maintain 100% network uptime and terminal cash availability, our ATM services are provided on an "as-available" basis. Happy Frog ATM is not liable for indirect, incidental, or operational revenue losses caused by terminal downtime, armored transit delays, network provider outages, or power failures on your host premises.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Governing Law</h2>
            <p>
              These Terms, site operations, and all ATM placement contracts shall be governed by and construed in accordance with local state statutes where the physical hardware is installed, without regard to conflict of law principles.
            </p>
            <p>
              For legal inquiries or corporate notifications, please write to us at:<br />
              <strong>Happy Frog ATM, Inc.</strong><br />
              Attn: Legal Department<br />
              PO Box 420, ATM Town, CA 90001
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

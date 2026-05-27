import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Happy Frog ATM',
  description: 'Learn how Happy Frog ATM collects, stores, and protects customer and dispensary business data.',
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav minimal />
      <main>
        <section className="legal-hero">
          <h1>Privacy Policy</h1>
          <p>
            Last Updated: May 27, 2026. This Privacy Policy describes how Happy Frog ATM collects, uses, and safeguards your information when you request or operate our ATMs.
          </p>
        </section>

        <article className="legal-body">
          <div className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              To evaluate qualifying dispensary locations and establish secure ATM operations, we collect business and contact information. This includes details submitted via our contact forms, such as:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> First name, last name, phone number, and business email address.</li>
              <li><strong>Business Credentials:</strong> Dispensary name, street address, and active state-issued cannabis license status.</li>
              <li><strong>Operational Details:</strong> Floor space availability, security profile, and average daily customer traffic indicators.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>
              Happy Frog ATM uses the collected information strictly for operational and evaluation purposes:
            </p>
            <ul>
              <li>To evaluate and qualify your dispensary for free EMV-ready ATM placement.</li>
              <li>To prepare licensing, installation agreements, and dispatch our service crews.</li>
              <li>To coordinate armored car cash loading and real-time machine hardware monitoring.</li>
              <li>To calculate and process your monthly withdrawal surcharge commission payouts.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Data Sharing and Transfer</h2>
            <p>
              We prioritize data security and commercial confidentiality. We **do not sell, rent, or lease** your contact details or business credentials to third-party brokers, advertisers, or cannabis brands. Your business data is shared exclusively with:
            </p>
            <ul>
              <li><strong>Banking Partners:</strong> Compliant banking and sponsor bank institutions that process the ATM transactions.</li>
              <li><strong>Logistics Partners:</strong> Armored car and courier dispatch firms responsible for secure vault cash replenishment.</li>
              <li><strong>Regulatory Authorities:</strong> State or federal agencies where required to maintain regulatory compliance for state-licensed ATM operations.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Transaction & Security Safeguards</h2>
            <p>
              Happy Frog ATMs operate on fully encrypted banking networks using premium industry hardware. We utilize EMV chip-enabled card readers and advanced encryption standards (Triple DES) to prevent terminal card skimming. Any business metadata collected through our website is stored on secure cloud servers with strict firewall controls and limited administrative access.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Cookies & Site Analytics</h2>
            <p>
              Our website uses basic analytics tools to monitor traffic volume and improve user experience. These tools may drop simple browser cookies to track visits, aggregate browser stats, and record page response times. Cookies contain no personally identifying information. You can configure your browser to reject cookies if preferred.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Your Choices & Contact</h2>
            <p>
              If you have submitted a request for ATM placement and would like to modify your application details, inspect the data we hold, or request complete removal of your business record, please contact our support team.
            </p>
            <p>
              <strong>Email:</strong> support@happyfrogatm.com<br />
              <strong>Phone:</strong> (800) 555-FROG
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — AI Hub Malaysia',
  description: 'Privacy policy for AI Hub Malaysia, operated by AITG Sdn Bhd.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span style={{ color: '#C9A84C' }}>★</span>
          <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>Legal</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-sm" style={{ color: 'rgba(184,204,224,0.50)' }}>Last updated: May 2025</p>
        <div className="gold-rule mt-6" />
      </div>

      <div className="prose-custom space-y-8">

        <section>
          <h2>1. Who We Are</h2>
          <p>
            AI Hub Malaysia is operated by <strong>AITG Sdn Bhd</strong> (202601016521 / 1678618-W),
            a company incorporated in Malaysia and based in Penang. When this policy refers to
            "we", "us", or "our", it means AITG Sdn Bhd.
          </p>
          <p>
            For privacy enquiries, contact us at{' '}
            <a href="mailto:admin@aiteragrid.com">admin@aiteragrid.com</a>.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information you voluntarily provide, including:</p>
          <ul>
            <li>Name and email address when you join our community or contact us</li>
            <li>Messages or enquiries you send via our contact form</li>
            <li>Community platform data (Discord, Telegram) governed by those platforms' own policies</li>
          </ul>
          <p>
            We also collect standard web analytics data such as page views and referrer information
            through privacy-respecting analytics tools.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide community support</li>
            <li>Send updates about AI Hub Malaysia events, news, and community announcements</li>
            <li>Improve our website and community offerings</li>
          </ul>
          <p>
            We will never sell your personal data to third parties, and we will not use it for
            purposes unrelated to AI Hub Malaysia without your explicit consent.
          </p>
        </section>

        <section>
          <h2>4. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes
            described in this policy, or as required by applicable law. You may request deletion
            of your data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>
            Our website and community may use third-party services including Discord, Telegram,
            and email delivery providers. Each of these services has its own privacy policy and
            data practices, which we encourage you to review.
          </p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            This website may use minimal cookies for session management and analytics. We do not
            use advertising or tracking cookies. You can disable cookies in your browser settings
            at any time.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>Under applicable Malaysian law and where relevant, GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications at any time</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:admin@aiteragrid.com">admin@aiteragrid.com</a>.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated date. Continued use of our services after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            AITG Sdn Bhd · 202601016521 (1678618-W)<br />
            Penang, Malaysia<br />
            <a href="mailto:admin@aiteragrid.com">admin@aiteragrid.com</a>
          </p>
        </section>

      </div>

      <style jsx>{`
        .prose-custom h2 {
          font-family: var(--font-display, sans-serif);
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }
        .prose-custom p {
          color: rgba(184,204,224,0.75);
          line-height: 1.8;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }
        .prose-custom ul {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 0.75rem;
        }
        .prose-custom ul li {
          color: rgba(184,204,224,0.75);
          font-size: 0.95rem;
          padding-left: 1.25rem;
          position: relative;
          margin-bottom: 0.4rem;
          line-height: 1.7;
        }
        .prose-custom ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C9A84C;
        }
        .prose-custom a {
          color: #C9A84C;
          text-decoration: none;
        }
        .prose-custom a:hover {
          text-decoration: underline;
        }
        .prose-custom strong {
          color: rgba(184,204,224,0.90);
          font-weight: 600;
        }
        .prose-custom section {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.08);
        }
        .prose-custom section:last-child {
          border-bottom: none;
        }
      `}</style>
    </main>
  );
}

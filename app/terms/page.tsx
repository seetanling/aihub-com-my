import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — AI Hub Malaysia',
  description: 'Terms of use for AI Hub Malaysia, operated by AITG Sdn Bhd.',
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span style={{ color: '#C9A84C' }}>★</span>
          <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>Legal</span>
        </div>
        <h1 className="text-4xl font-display font-bold text-white mb-3">Terms of Use</h1>
        <p className="text-sm" style={{ color: 'rgba(184,204,224,0.50)' }}>Last updated: May 2025</p>
        <div className="gold-rule mt-6" />
      </div>

      <div className="prose-custom space-y-8">

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the AI Hub Malaysia website (aihub.com.my) or any of its
            associated community channels, you agree to be bound by these Terms of Use. If you
            do not agree, please do not use our services.
          </p>
          <p>
            These terms are governed by the laws of Malaysia. AI Hub Malaysia is operated by
            <strong> AITG Sdn Bhd</strong> (202601016521 / 1678618-W), Penang, Malaysia.
          </p>
        </section>

        <section>
          <h2>2. Use of the Website</h2>
          <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Infringe the rights of any third party</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
            <li>Knowingly transmit harmful, offensive, or disruptive content</li>
            <li>Attempt to gain unauthorised access to any part of the website or its systems</li>
          </ul>
        </section>

        <section>
          <h2>3. Community Standards</h2>
          <p>
            AI Hub Malaysia community spaces (including Discord and Telegram) are professional
            environments for AI practitioners, founders, and enthusiasts. Members are expected to:
          </p>
          <ul>
            <li>Treat all members with respect and professionalism</li>
            <li>Share knowledge in good faith and with proper attribution</li>
            <li>Not engage in spam, self-promotion without context, or harassment</li>
            <li>Comply with the rules of each community platform</li>
          </ul>
          <p>
            AITG Sdn Bhd reserves the right to remove any member from community spaces for
            violations of these standards without prior notice.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and design — is the
            property of AITG Sdn Bhd or its content suppliers and is protected by applicable
            intellectual property laws. You may not reproduce, distribute, or create derivative
            works without our prior written consent.
          </p>
        </section>

        <section>
          <h2>5. Disclaimers</h2>
          <p>
            This website and its content are provided "as is" without warranty of any kind.
            AITG Sdn Bhd does not warrant that the website will be uninterrupted, error-free,
            or free of viruses or other harmful components.
          </p>
          <p>
            Information shared within the AI Hub Malaysia community represents the views of
            individual members and not necessarily those of AITG Sdn Bhd.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by Malaysian law, AITG Sdn Bhd shall not be liable
            for any indirect, incidental, special, or consequential damages arising from your use
            of this website or community channels.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for
            convenience only. AITG Sdn Bhd has no control over the content of those sites and
            accepts no responsibility for them.
          </p>
        </section>

        <section>
          <h2>8. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be
            effective immediately upon posting to this page. Continued use of our services after
            any changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            For any questions regarding these terms, please contact us at:<br />
            AITG Sdn Bhd · 202601016521 (1678618-W)<br />
            Penang, Malaysia<br />
            <a href="mailto:admin@aiteragrid.com">admin@aiteragrid.com</a>
          </p>
        </section>

      </div>

    </main>
  );
}

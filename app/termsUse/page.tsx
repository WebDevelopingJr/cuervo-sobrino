import Header from "../components/header";
import Footer from "../components/footer";

export default function TermsUse() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Hero */}
        <section className="px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">
              Legal
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Terms of Use
            </h1>

            <p className="mt-6 text-gray-500">
              Last updated: August 17, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="leading-8 text-gray-600">
                Welcome to our website. By accessing or using this website,
                you agree to be bound by these Terms of Use and all applicable
                laws and regulations.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                If you do not agree with these terms, please do not use our
                website or services.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Use of the Website
              </h2>

              <p className="leading-8 text-gray-600">
                You agree to use this website only for lawful purposes and in
                a manner that does not violate the rights of others or
                interfere with the operation of the website.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                You may not use the website to engage in fraudulent,
                abusive, harmful, or unauthorized activities.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Intellectual Property
              </h2>

              <p className="leading-8 text-gray-600">
                Unless otherwise stated, all content on this website,
                including text, graphics, logos, images, designs, software,
                and other materials, is owned by or licensed to us and is
                protected by applicable intellectual property laws.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                You may not reproduce, modify, distribute, sell, or use our
                content without prior written permission, unless otherwise
                permitted by law.
              </p>
            </div>

            {/* User Content */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. User-Submitted Content
              </h2>

              <p className="leading-8 text-gray-600">
                If you submit information, comments, feedback, or other
                content through our website, you are responsible for ensuring
                that the content is accurate, lawful, and does not violate the
                rights of any third party.
              </p>
            </div>

            {/* Third Party Links */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Third-Party Links and Services
              </h2>

              <p className="leading-8 text-gray-600">
                Our website may contain links to third-party websites or
                services. These links are provided for convenience and do not
                imply that we endorse or control those third parties.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We are not responsible for the content, policies, or practices
                of third-party websites.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Disclaimer
              </h2>

              <p className="leading-8 text-gray-600">
                The information provided on this website is provided for
                general informational purposes only. While we make reasonable
                efforts to keep the information accurate and up to date, we do
                not guarantee that all information is complete, accurate, or
                current.
              </p>
            </div>

            {/* Limitation */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>

              <p className="leading-8 text-gray-600">
                To the extent permitted by applicable law, we shall not be
                liable for any direct, indirect, incidental, consequential, or
                other damages arising from your use of, or inability to use,
                this website or its content.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Termination
              </h2>

              <p className="leading-8 text-gray-600">
                We reserve the right to suspend or terminate access to the
                website at any time, without prior notice, if we believe that
                a user has violated these Terms of Use or applicable laws.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Changes to These Terms
              </h2>

              <p className="leading-8 text-gray-600">
                We may modify these Terms of Use from time to time. Any
                updates will be posted on this page with a revised "Last
                updated" date.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Your continued use of the website after changes are posted
                constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Governing Law
              </h2>

              <p className="leading-8 text-gray-600">
                These Terms of Use shall be governed by and interpreted in
                accordance with the applicable laws of the jurisdiction in
                which the website owner operates, unless otherwise required
                by applicable law.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact Us
              </h2>

              <p className="leading-8 text-gray-600">
                If you have any questions regarding these Terms of Use, please
                contact us using the contact information provided on our
                website.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
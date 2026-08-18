import Header from "../components/header";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                1. Introduction
              </h2>

              <p className="leading-8 text-gray-600">
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, protect, and disclose information when you
                visit or use our website and services.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                By using our website, you agree to the practices described in
                this Privacy Policy.
              </p>
            </div>

            {/* Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <p className="leading-8 text-gray-600">
                We may collect information that you voluntarily provide to us,
                such as your name, email address, phone number, or other
                information submitted through forms on our website.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We may also automatically collect certain technical information,
                including your IP address, browser type, device information,
                pages visited, and general usage information.
              </p>
            </div>

            {/* How we use */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>

              <p className="leading-8 text-gray-600 mb-4">
                We may use the information we collect to:
              </p>

              <ul className="space-y-3 text-gray-600 list-disc pl-6">
                <li>Provide and maintain our services.</li>
                <li>Respond to inquiries and requests.</li>
                <li>Improve our website and user experience.</li>
                <li>Communicate with you when necessary.</li>
                <li>Protect our website from fraud or unauthorized activity.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Cookies and Tracking Technologies
              </h2>

              <p className="leading-8 text-gray-600">
                Our website may use cookies and similar technologies to improve
                functionality, understand how visitors use our website, and
                provide a better user experience.
              </p>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Sharing Your Information
              </h2>

              <p className="leading-8 text-gray-600">
                We do not sell your personal information. We may share
                information with trusted service providers when necessary to
                operate our website, provide our services, or comply with legal
                requirements.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Security
              </h2>

              <p className="leading-8 text-gray-600">
                We take reasonable measures to protect the information we
                collect from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission or electronic
                storage is completely secure.
              </p>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Your Privacy Rights
              </h2>

              <p className="leading-8 text-gray-600">
                Depending on your location, you may have certain rights
                regarding your personal information, including the right to
                access, correct, delete, or request restrictions on the use of
                your information.
              </p>
            </div>

            {/* Third party */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Third-Party Services
              </h2>

              <p className="leading-8 text-gray-600">
                Our website may contain links to or integrate with third-party
                services. We are not responsible for the privacy practices of
                third-party websites or services. We encourage you to review
                their privacy policies before providing personal information.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Changes to This Privacy Policy
              </h2>

              <p className="leading-8 text-gray-600">
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page along with an updated
                revision date.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contact Us
              </h2>

              <p className="leading-8 text-gray-600">
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact us through the contact
                information provided on our website.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
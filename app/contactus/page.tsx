'use client';
import Footer from '../components/footer';
import Header from '../components/header';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="header-shell">
        <Header />
      </div>

      <section className="contact-hero">
        <div className="hero-content">
          <p className="eyebrow">Contact</p>
          <h1>Get in Touch With Us</h1>
          <p className="subtitle">
            We're ready to help you find the perfect watch or clothing piece
            and provide exceptional service for your needs.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="form-card">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="field-row">
              <label>
                First Name
                <input type="text" name="name" placeholder="Your first name" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastname" placeholder="Your last name" />
              </label>
            </div>

            <div className="field-row">
              <label>
                Email
                <input type="email" name="email" placeholder="your@email.com" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" placeholder="(555) 123-4567" />
              </label>
            </div>

            <label>
              Subject
              <input type="text" name="subject" placeholder="What would you like to get for you" />
            </label>


            <button type="submit">Send Message</button>
          </form>
        </div>

        <aside className="info-card">
          <h3>Information</h3>
          <div className="info-item">
            <span className="label">Email</span>
            <a href="mailto:hello@cuervosobrino.com">cuervoysobrino@gmail.com</a>
          </div>
          <div className="info-item">
            <span className="label">Phone</span>
            <a href="tel:+1234567890">+1 (786) 663-4226</a>
          </div>
          <div className="info-item">
            <span className="label">Hours</span>
            <p>Martes–Sábado · 11:00am–6:30pm</p>
          </div>
        </aside>
      </section>

      <Footer />

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #f5efe7;
          color: #1f2c2a;
          font-family: Arial, Helvetica, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(198, 165, 106, 0.2), transparent 30%),
            linear-gradient(180deg, #f8f3ed 0%, #f1e7dc 100%);
        }

        .header-shell {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(19, 31, 28, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(198, 165, 106, 0.35);
          box-shadow: 0 8px 30px rgba(19, 31, 28, 0.1);
        }

        .contact-hero {
          padding: 5rem 1.5rem 2rem;
          background: linear-gradient(135deg, #0f1f1d 0%, #233d38 100%);
          color: #f7f1e8;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 0 1.5rem;
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          letter-spacing: 0.18rem;
          text-transform: uppercase;
          color: #d8bf8f;
          margin-bottom: 1rem;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.5rem, 5vw, 4.6rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          max-width: 780px;
        }

        .subtitle {
          max-width: 700px;
          margin-top: 1.2rem;
          color: rgba(247, 241, 232, 0.8);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .contact-section {
          max-width: 1200px;
          margin: -2.5rem auto 4rem;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1.5fr 0.8fr;
          gap: 2rem;
          align-items: start;
        }

        .form-card,
        .info-card {
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(31, 44, 42, 0.08);
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(19, 31, 28, 0.08);
          backdrop-filter: blur(6px);
        }

        .form-card {
          padding: 2rem;
        }

        h2,
        h3 {
          margin: 0 0 1.5rem;
          color: #1d2f2c;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .field-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        label {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #233d38;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid rgba(31, 44, 42, 0.12);
          background: rgba(247, 241, 232, 0.85);
          border-radius: 12px;
          padding: 0.9rem 1rem;
          font: inherit;
          color: #1d2f2c;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(29, 47, 44, 0.55);
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: rgba(198, 165, 106, 0.85);
          box-shadow: 0 0 0 4px rgba(198, 165, 106, 0.18);
        }

        textarea {
          resize: vertical;
          min-height: 150px;
        }

        button {
          appearance: none;
          border: none;
          background: linear-gradient(135deg, #c6a56a 0%, #b88d45 100%);
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 1rem 1.4rem;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 10px 25px rgba(184, 141, 69, 0.3);
        }

        button:hover {
          transform: translateY(-1px);
        }

        .info-card {
          padding: 2rem 1.5rem;
          background: linear-gradient(180deg, #12322f 0%, #1c413e 100%);
          color: #f7f1e8;
        }

        .info-card h3 {
          color: #f7f1e8;
        }

        .info-item {
          padding-top: 1.1rem;
          border-top: 1px solid rgba(247, 241, 232, 0.14);
          margin-top: 1.1rem;
        }

        .label {
          display: block;
          color: #d8bf8f;
          font-size: 0.74rem;
          letter-spacing: 0.12rem;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .info-item a,
        .info-item p {
          margin: 0;
          color: #f7f1e8;
          text-decoration: none;
          line-height: 1.7;
        }

        @media (max-width: 820px) {
          .contact-section {
            grid-template-columns: 1fr;
          }

          .field-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}


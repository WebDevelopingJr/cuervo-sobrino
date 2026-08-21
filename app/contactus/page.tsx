'use client';
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', lastname: '', email: '', phone: '', subject: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus('sent');
      setFormData({ name: '', lastname: '', email: '', phone: '', subject: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f8f3ed] to-[#f1e7dc]">
      <div className="sticky top-0 z-20 bg-[#1f1f1f]/90 backdrop-blur-md border-b border-[#c6a56a]/35 shadow-[0_8px_30px_rgba(19,31,28,0.1)]">
        <Header />
      </div>

      {/* Hero */}
      <section className="px-6 pt-20 pb-8 bg-linear-to-br from-[#2a0f0f] to-[#4a1818] text-[#f7f1e8]">
        <div className="max-w-6xl mx-auto py-12 pb-6">
          <p className="inline-block text-sm tracking-[0.18rem] uppercase text-[#d8bf8f] mb-4">
            Contact
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.6rem)] leading-[1.05] tracking-[-0.04em] max-w-3xl m-0">
            Get in Touch With Us
          </h1>
          <p className="max-w-2xl mt-5 text-[#f7f1e8]/80 text-lg leading-relaxed">
            We're ready to help you find the perfect watch or clothing piece
            and provide exceptional service for your needs.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="max-w-6xl mx-auto -mt-10 mb-16 px-6 grid grid-cols-1 md:grid-cols-[1.5fr_0.8fr] gap-8 items-start">
        <div className="bg-white/76 border border-[#1f2c2a]/8 rounded-3xl shadow-[0_20px_50px_rgba(19,31,28,0.08)] backdrop-blur-sm p-8">
          <h2 className="mb-6 text-[#1d2f2c]">Send Us a Message</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2.5 text-sm font-semibold text-[#233d38]">
                First Name
                <input
                  type="text" name="name" placeholder="Your first name"
                  value={formData.name} onChange={handleChange} required
                  className="w-full border border-[#1f2c2a]/12 bg-[#f7f1e8]/85 rounded-xl px-4 py-3.5 text-[#1d2f2c] placeholder:text-[#1d2f2c]/55 focus:outline-none focus:border-[#c6a56a]/85 focus:ring-4 focus:ring-[#c6a56a]/18 transition-colors"
                />
              </label>
              <label className="flex flex-col gap-2.5 text-sm font-semibold text-[#233d38]">
                Last Name
                <input
                  type="text" name="lastname" placeholder="Your last name"
                  value={formData.lastname} onChange={handleChange}
                  className="w-full border border-[#1f2c2a]/12 bg-[#f7f1e8]/85 rounded-xl px-4 py-3.5 text-[#1d2f2c] placeholder:text-[#1d2f2c]/55 focus:outline-none focus:border-[#c6a56a]/85 focus:ring-4 focus:ring-[#c6a56a]/18 transition-colors"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2.5 text-sm font-semibold text-[#233d38]">
                Email
                <input
                  type="email" name="email" placeholder="your@email.com"
                  value={formData.email} onChange={handleChange} required
                  className="w-full border border-[#1f2c2a]/12 bg-[#f7f1e8]/85 rounded-xl px-4 py-3.5 text-[#1d2f2c] placeholder:text-[#1d2f2c]/55 focus:outline-none focus:border-[#c6a56a]/85 focus:ring-4 focus:ring-[#c6a56a]/18 transition-colors"
                />
              </label>
              <label className="flex flex-col gap-2.5 text-sm font-semibold text-[#233d38]">
                Phone
                <input
                  type="tel" name="phone" placeholder="(555) 123-4567"
                  value={formData.phone} onChange={handleChange}
                  className="w-full border border-[#1f2c2a]/12 bg-[#f7f1e8]/85 rounded-xl px-4 py-3.5 text-[#1d2f2c] placeholder:text-[#1d2f2c]/55 focus:outline-none focus:border-[#c6a56a]/85 focus:ring-4 focus:ring-[#c6a56a]/18 transition-colors"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2.5 text-sm font-semibold text-[#233d38]">
              Subject
              <input
                type="text" name="subject" placeholder="What would you like to get for you"
                value={formData.subject} onChange={handleChange} required
                className="w-full border border-[#1f2c2a]/12 bg-[#f7f1e8]/85 rounded-xl px-4 py-3.5 text-[#1d2f2c] placeholder:text-[#1d2f2c]/55 focus:outline-none focus:border-[#c6a56a]/85 focus:ring-4 focus:ring-[#c6a56a]/18 transition-colors"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="appearance-none border-none bg-linear-to-br from-[#c6a56a] to-[#a3763a] text-white font-bold tracking-wide py-4 px-6 rounded-xl cursor-pointer transition-transform hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(163,118,58,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'sending' ? 'Enviando...' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="text-sm -mt-2 text-green-700">¡Mensaje enviado! Te contactaremos pronto.</p>
            )}
            {status === 'error' && (
              <p className="text-sm -mt-2 text-red-700">Hubo un error. Intenta de nuevo.</p>
            )}
          </form>
        </div>

        <aside className="bg-linear-to-b from-[#3a1414] to-[#4f1c1c] border border-[#1f2c2a]/8 rounded-3xl shadow-[0_20px_50px_rgba(19,31,28,0.08)] backdrop-blur-sm p-8 px-6 text-[#f7f1e8]">
          <h3 className="mb-6 text-[#f7f1e8]">Information</h3>

          <div className="pt-4 mt-4 border-t border-[#f7f1e8]/[0.14]">
            <span className="block text-[#d8bf8f] text-xs tracking-[0.12rem] uppercase mb-1.5">Email</span>
            <a href="mailto:cuervoysobrino@gmail.com" className="text-[#f7f1e8] no-underline leading-relaxed">
              cuervoysobrino@gmail.com
            </a>
          </div>

          <div className="pt-4 mt-4 border-t border-[#f7f1e8]/[0.14]">
            <span className="block text-[#d8bf8f] text-xs tracking-[0.12rem] uppercase mb-1.5">Phone</span>
            <a href="tel:+17866634226" className="text-[#f7f1e8] no-underline leading-relaxed">
              +1 (786) 663-4226
            </a>
          </div>

          <div className="pt-4 mt-4 border-t border-[#f7f1e8]/[0.14]">
            <span className="block text-[#d8bf8f] text-xs tracking-[0.12rem] uppercase mb-1.5">Hours</span>
            <p className="text-[#f7f1e8] leading-relaxed m-0">Martes–Sábado · 11:00am–6:30pm</p>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
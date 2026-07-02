'use client';
import React from "react";
import Image from "next/image";
import '../globals.css'
import logoMain from '../../public/images/home/log-CyS-LepalaisRoyal.png'

export default function Footer() { 

   return (
    <>
    {/* Newsletter */}
    <section className="newsletter">
        <div className="newsletter-inner reveal">
                <p className="nl-eyebrow">Private Circle</p>
                <h2 className="nl-title">Join the circle of the privileged few</h2>
                <p className="nl-sub">We do not send emails — we send invitations. Join our private list and be the first to discover new arrivals, one-of-a-kind pieces, seasonal collections, and exclusive events at Le Palais Royal 305.</p>
            <div className="nl-form">
                <input type="email" placeholder="Your email address"/>
                <button>Subscribe ↗</button>
            </div>
            <div className="nl-perks">
                <div className="nl-perk"><div className="nl-perk-dot"></div>Early access to new collections</div>
                <div className="nl-perk"><div className="nl-perk-dot"></div>Private event invitations</div>
                <div className="nl-perk"><div className="nl-perk-dot"></div>Exclusive offers & surprises</div>
            </div>
        </div>
    </section>

    <footer className="site-footer">
  <div className="footer-inner">
    <div className="footer-brand">
      <Image src={logoMain} alt="Le Palais Royal 305" className="footer-logo" />
      <p className="footer-dealer">Cuervo y Sobrinos Lepaleis Royal</p>
    </div>

    <div className="footer-grid">
      <div className="footer-col">
        <span className="footer-label">Visítanos</span>
        <p>1607 Ponce de Leon Blvd</p>
        <p>Coral Gables Unit 102, Florida 33134</p>
        <p className="footer-hours">Martes–Sábado · 11:00am–6:30pm</p>
        <p className="footer-hours">Sunday Close</p>
        <p>Monday by appointment</p>
      </div>

      <div className="footer-col">
        <span className="footer-label">Contacto</span>
        <a href="tel:+17866634226">(786) 663-4226</a>
        <a href="tel:+17867402313">(786) 740-2313</a>
        <a href="tel:+17866634226">(786) 582-1141</a>
      </div>

      <div className="footer-col">
        <span className="footer-label">Síguenos</span>
        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">X</a>
        </div>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <span>© 2026 Cuervo y Sobrino Lepaleis Royale · Todos los derechos reservados</span>
  </div>
</footer>
    </>     
   )
}
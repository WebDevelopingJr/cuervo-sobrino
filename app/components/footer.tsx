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

    <footer>
    <div className="footer-hero">
        <div className="footer-hero-overlay">
        <div className="footer-top">
            <div className="footer-info">
            <p>Monday-Saturday from 10:30 am to 6:30pm</p>
            <p>(786) 663-4226 or (786) 740-2313</p>
            <p>1607 Ponce de Leon Blvd, Coral Gables, Florida 33134</p>
            </div>
            <div className="footer-right">
            <div className="footer-social-label">Socials</div>
            <div className="footer-social">
                <a href="#">Instagram</a>
                <a href="#">X</a>
                <a href="#">Facebook</a>
            </div>
            <div>
                <div className="footer-social-label">Cuervo y Sobrinos Authorized Dealer</div>
                <div className="footer-social-label">© 2025 @Le Palais Royal · All rights reserved</div>
            </div>
            </div>
        </div>
        <div className="imgHolder">
            <Image src={logoMain} alt="logo" />
        </div>
        </div>
    </div>
    </footer>
    </>     
   )
}
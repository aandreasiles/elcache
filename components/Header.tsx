
import React from 'react';
import { WhatsAppIcon } from './icons';

const WHATSAPP_NUMBER = "34608570360";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-white hover:text-mandarin transition-colors duration-300 px-3 py-2 text-sm font-medium">
        {children}
    </a>
);

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#hero" className="text-2xl font-bold text-mandarin tracking-wider">
                    El Caché
                </a>
                <nav className="hidden md:flex items-center">
                    <NavLink href="#services">Servicios</NavLink>
                    <NavLink href="#pricing">Precios</NavLink>
                    <NavLink href="#gallery">Galería</NavLink>
                    <NavLink href="#reviews">Reseñas</NavLink>
                    <NavLink href="#contact">Contacto</NavLink>
                </nav>
                <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-mandarin text-black font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                    <WhatsAppIcon className="h-5 w-5" />
                    <span className="hidden sm:inline">Reservar</span>
                </a>
            </div>
        </header>
    );
};

export default Header;

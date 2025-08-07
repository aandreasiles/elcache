import React from 'react';
import { WhatsAppIcon } from './icons';

const WHATSAPP_NUMBER = "34608570360";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola! Me gustaría reservar una cita.")}`;

const marqueeServices = [
    "Extensiones", "Alisado", "Tratamientos", "Color", "Peinados", "Cortes", "Afeitado", "Maquillaje", "Manicura", "Pedicura"
];

// Duplicate the array to ensure seamless looping for the marquee
const marqueeContent = [...marqueeServices, ...marqueeServices];

const MarqueeText: React.FC = () => {
    return (
        <div className="marquee absolute bottom-0 left-0 right-0 py-4 bg-black/50 backdrop-blur-sm z-20">
            <div className="marquee-content">
                {marqueeContent.map((text, index) => (
                    <span key={index} className="marquee-item text-xl font-semibold text-mandarin tracking-widest">
                        {text.toUpperCase()} <span className="text-gray-500 mx-4">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
};


const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/data/portada-cache.webp')" }}
            ></div>
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-radial-hero"></div>
            
            <div className="relative z-10 text-center p-6 flex-grow flex flex-col items-center justify-center">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-tight">
                    El Caché
                </h1>
                <p className="text-3xl md:text-4xl text-mandarin mt-2 md:mt-4 tracking-widest font-semibold">
                    PELUQUERÍA & BARBER SHOP
                </p>
                <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-xl mx-auto">
                    Estilo, precisión y cuidado personal en el corazón de la ciudad. Tu imagen es nuestra pasión.
                </p>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-3 bg-mandarin text-black font-bold py-4 px-8 rounded-full text-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300"
                >
                    <WhatsAppIcon className="h-7 w-7" />
                    Reservar Cita
                </a>
            </div>

            {/* Marquee Text at the bottom */}
            <MarqueeText />
        </section>
    );
};

export default Hero;
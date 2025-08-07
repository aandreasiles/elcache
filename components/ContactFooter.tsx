import React from 'react';
import { WhatsAppIcon, ClockIcon, MapPinIcon } from './icons';

const WHATSAPP_NUMBER = "34608570360";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola! Me gustaría reservar una cita o pedir información.")}`;

const ContactFooter: React.FC = () => {
    return (
        <footer id="contact" className="bg-black border-t-2 border-mandarin py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold text-white mb-4">
                    ¿Listo para tu cambio?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                    Contacta con nosotros para reservar tu cita. ¡Te esperamos para ofrecerte la mejor experiencia!
                </p>
                
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-12 inline-flex items-center gap-3 bg-mandarin text-black font-bold py-4 px-8 rounded-full text-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300"
                >
                    <WhatsAppIcon className="h-7 w-7" />
                    Reservar por WhatsApp
                </a>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mt-12">
                    <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                        <h4 className="flex items-center gap-3 text-2xl font-bold text-mandarin mb-3">
                            <ClockIcon className="h-7 w-7" />
                            Horario
                        </h4>
                        <p className="text-gray-300 text-lg">Lunes a Sábado</p>
                        <p className="text-3xl font-semibold text-white">10:00 - 21:00</p>
                        <p className="text-gray-400 mt-1">Domingo: Cerrado</p>
                    </div>
                     <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                        <h4 className="flex items-center gap-3 text-2xl font-bold text-mandarin mb-3">
                            <MapPinIcon className="h-7 w-7" />
                            Contacto y Ubicación
                        </h4>
                        <p className="text-gray-300 text-lg">Teléfono (Solo WhatsApp):</p>
                        <a href={WHATSAPP_URL} className="text-3xl font-semibold text-white hover:text-mandarin transition-colors">{`+${WHATSAPP_NUMBER.slice(0,2)} ${WHATSAPP_NUMBER.slice(2)}`}</a>
                        <p className="text-gray-400 mt-1">Calle Ficticia 123, 08001 Barcelona</p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} El Caché Peluquería & Barbería. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
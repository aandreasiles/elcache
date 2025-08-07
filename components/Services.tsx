import React from 'react';
import { Service } from '../types';
import ScrollAnimator from './ScrollAnimator';

interface ServicesProps {
    services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
    return (
        <section id="services" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Nuestros <span className="text-mandarin">Servicios</span></h2>
                    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
                        Ofrecemos una gama completa de servicios para realzar tu belleza y estilo, utilizando productos de la más alta calidad.
                    </p>
                </ScrollAnimator>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        return (
                             <ScrollAnimator key={index}>
                                <div className="group border border-gray-800 rounded-lg p-8 text-center flex items-center justify-center min-h-[180px] bg-black/50 backdrop-blur-sm shadow-lg cursor-default overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-mandarin">
                                     <div>
                                        <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-mandarin transition-colors duration-300">
                                            {service.name}
                                        </h3>
                                     </div>
                                </div>
                            </ScrollAnimator>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
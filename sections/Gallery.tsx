import React from 'react';
import ScrollAnimator from '../components/ScrollAnimator';

const images = [
  { src: 'https://storage.googleapis.com/generative-ai-pro-docs-testing/original_images/c3b164f9-2b13-4c57-bc97-f58c4224976c.jpeg', alt: 'Vista general del salón de El Caché' },
  { src: 'https://storage.googleapis.com/generative-ai-pro-docs-testing/original_images/e8c87e83-9b98-4443-8b77-ce2220d91206.jpeg', alt: 'Estantería con productos y televisión en el salón' },
  { src: 'https://storage.googleapis.com/generative-ai-pro-docs-testing/original_images/d7249a0a-48a0-4384-88aa-30c14b35e69a.jpeg', alt: 'Sillón de barbero profesional y puesto de trabajo' },
  { src: 'https://storage.googleapis.com/generative-ai-pro-docs-testing/original_images/c258f334-a28d-4f81-a89e-4e49e2954a22.jpeg', alt: 'Entrada al local y zona de productos' },
  { src: 'https://storage.googleapis.com/generative-ai-pro-docs-testing/original_images/d73b0a70-fd15-430c-ab23-88229b007886.jpeg', alt: 'Mobiliario de madera y puesto de cobro' },
];

const GalleryImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
    return (
        <div className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg hover:shadow-mandarin/40 transition-shadow duration-300">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out" 
                loading="lazy"
            />
        </div>
    );
};


const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Nuestra <span className="text-mandarin">Galería</span></h2>
                </ScrollAnimator>
                <ScrollAnimator className="w-full">
                    <div className="columns-2 md:columns-3 lg:columns-3 gap-4">
                        {images.map((image, index) => (
                            <GalleryImage key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </ScrollAnimator>
            </div>
        </section>
    );
};

export default Gallery;
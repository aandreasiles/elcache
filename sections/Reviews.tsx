import React from 'react';
import { Review } from '../types';
import { StarIcon } from '../components/icons';
import ScrollAnimator from '../components/ScrollAnimator';

const mockReviews: Review[] = [
    {
        author: 'Ana García',
        rating: 5,
        text: '¡El mejor trato y profesionalidad! Salí encantada con mis mechas. El color es exactamente lo que quería. ¡Volveré sin duda!',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
        author: 'Carlos Pérez',
        rating: 5,
        text: 'Un corte de pelo y afeitado impecables. El ambiente es genial y el barbero muy atento a los detalles. Mi nueva barbería de confianza.',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    },
    {
        author: 'Lucía Martínez',
        rating: 5,
        text: 'Me hice el tratamiento restaurador y mi pelo parece otro. Súper suave y brillante. El personal es muy amable y te aconsejan genial.',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-mandarin' : 'text-gray-600'}`} />
        ))}
    </div>
);

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-20 md:py-32 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Lo que dicen <span className="text-mandarin">Nuestros Clientes</span></h2>
                    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">Opiniones reales de clientes satisfechos. Tu confianza es nuestro mayor orgullo.</p>
                </ScrollAnimator>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockReviews.map((review, index) => (
                        <ScrollAnimator key={index}>
                            <div className="bg-black/50 border border-gray-800 p-8 rounded-lg flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <img src={review.avatarUrl} alt={review.author} className="w-14 h-14 rounded-full mr-4 border-2 border-mandarin"/>
                                    <div>
                                        <h4 className="font-bold text-xl text-white">{review.author}</h4>
                                        <Rating rating={review.rating} />
                                    </div>
                                </div>
                                <p className="text-gray-300 flex-grow text-base italic">"{review.text}"</p>
                                <p className="text-right text-sm text-gray-500 mt-4">Reseña de Google</p>
                            </div>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
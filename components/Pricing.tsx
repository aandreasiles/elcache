import React from 'react';
import { PriceCategory } from '../types';
import ScrollAnimator from './ScrollAnimator';

interface PricingProps {
    priceCategories: PriceCategory[];
}

const Pricing: React.FC<PricingProps> = ({ priceCategories }) => {
    return (
        <section id="pricing" className="py-20 md:py-32 bg-gray-900/50" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')"}}>
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Nuestras <span className="text-mandarin">Tarifas</span></h2>
                </ScrollAnimator>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {priceCategories.map((category, index) => (
                        <ScrollAnimator key={index}>
                            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-mandarin transition-all duration-300 shadow-lg">
                                <h3 className="text-3xl font-bold text-mandarin mb-6 border-b-2 border-mandarin/50 pb-4">{category.category}</h3>
                                <ul className="space-y-4">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex justify-between items-baseline gap-4">
                                            <span className="text-gray-200 text-lg">{item.name}</span>
                                            <span className="text-xl font-bold text-white whitespace-nowrap">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
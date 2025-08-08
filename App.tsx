import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import ContactFooter from './sections/ContactFooter';
import pricingData from './public/prices.json';


const App: React.FC = () => {
    return (
        <div className="bg-black text-white antialiased">
            <Header />
            <main>
                <Hero />
                <Pricing priceCategories={pricingData} />
                <Gallery />
                <Reviews />
            </main>
            <ContactFooter />
        </div>
    );
};

export default App;

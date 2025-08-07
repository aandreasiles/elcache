import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import ContactFooter from './sections/ContactFooter';

import { Service, PriceCategory } from './types';

const App: React.FC = () => {
    const [services, setServices] = React.useState<Service[]>([]);
    const [priceCategories, setPriceCategories] = React.useState<PriceCategory[]>([]);

    React.useEffect(() => {
        // Fetch services data
        fetch('./data/services.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services.json:', error));

        // Fetch pricing data
        fetch('./data/prices.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setPriceCategories(data))
            .catch(error => console.error('Error fetching prices.json:', error));
    }, []);

    return (
        <div className="bg-black text-white antialiased">
            <Header />
            <main>
                <Hero />
                <Pricing priceCategories={priceCategories} />
                <Gallery />
                <Reviews />
            </main>
            <ContactFooter />
        </div>
    );
};

export default App;

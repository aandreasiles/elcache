import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import ContactFooter from './sections/ContactFooter';


import { useBarberData } from './hooks/useBarberData';

const App: React.FC = () => {

    const { services, priceCategories, loading, error } = useBarberData();

    if (loading) {
        return <div className="bg-black text-white antialiased flex items-center justify-center min-h-screen">Cargando...</div>;
    }
    if (error) {
        return <div className="bg-black text-white antialiased flex items-center justify-center min-h-screen">Error: {error}</div>;
    }
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

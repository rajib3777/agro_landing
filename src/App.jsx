import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import Description from './components/Description';
import Reviews from './components/Reviews';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import OrderDashboard from './components/OrderDashboard';
import FloatingHotline from './components/FloatingHotline';

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Smooth scroll implementation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Listen for back/forward navigation
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    // Simple routing logic: if path ends with /admin, show dashboard
    const isAdmin = currentPath.endsWith('/admin') || currentPath.endsWith('/admin/');

    return (
        <div className="App">
            <Navbar />

            {isAdmin ? (
                <OrderDashboard />
            ) : (
                <>
                    <Hero />
                    <ProductGallery />
                    <Description />
                    <Reviews />
                    <div id="order">
                        <OrderForm />
                    </div>
                    <FloatingHotline />
                </>
            )}

            <Footer />

            {/* Admin Toggle button removed for public privacy as requested */}
        </div>
    );
}

export default App;

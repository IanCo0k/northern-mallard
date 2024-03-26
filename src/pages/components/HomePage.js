import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import FAQ from './FAQ';
import ProductCard from './ProductCard';
import Link from 'next/link'; // Import Link component from Next.js

export default function HomePage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/items');
                if (!response.ok) throw new Error('Failed to fetch items');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    // Slice the items array to get only the top 6 items
    const topItems = items.slice(0, 6);

    return (
        <div className='hero'>
            <Navbar />
            <HeroSection />
            <div className="container mx-auto p-4">
                {/* Product Section */}
                <h1 className='text-gray-200 font-bold p-5 mb-5 text-center text-5xl'>View Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topItems.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
                {/* "View All" Button */}
                <div className="flex justify-center mt-5">
                    <Link className="bg-orange-800 font-bold text-white px-6 py-3 rounded hover:bg-orange-900 transition duration-300 ease-in-out" href="/shop">
                            View All
                    </Link>
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

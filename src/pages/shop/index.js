import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShopIntro from '../components/ShopIntro'
import ProductCard from '../components/ProductCard'

export default function index() {

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
    }
    , []);

  return (
    <div className='min-h-screen hero'>
        <Navbar />
        <ShopIntro />
        <div className="container mx-auto p-4">
                {/* Product Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
               
            </div>
        <Footer />
    </div>
  )
}

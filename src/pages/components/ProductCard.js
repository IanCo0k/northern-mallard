import React from 'react';

function ProductCard({ item }) {


  // Check if item or item.name is undefined
  if (!item || !item.name) {
    return <div>Error: Product name not available</div>;
  }

  return (
    <div className="max-w-lg bg-green-900 border-[3px] border-orange-800 rounded-lg overflow-hidden shadow-lg">
      {/* Product Image */}
      <div className="relative">
        <img src={'https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg'} alt="Product Image" className="w-full h-auto" />
        {/* Product Details Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <button className="bg-orange-800 text-gray-200 font-semibold py-2 px-4 rounded">View Details</button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-300 mb-2">{item.name}</h2>

        {/* Description */}
        <p className="text-gray-200  mb-4">{item.description}</p>

        {/* Buy Now and starting_bid */}
        <div className="flex items-center justify-between">
          <button className="bg-orange-800 hover:bg-orange-900 text-white font-semibold py-2 px-4 rounded">Buy Now</button>
          <span className="text-gray-200 bg-orange-800 p-2 rounded font-semibold">Current Bid: ${item.starting_bid}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

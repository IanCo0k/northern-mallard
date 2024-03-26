import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=2759&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)', // Adjust brightness to darken the image
        }}
      />
      <div className="container mx-auto text-center relative z-10 py-24">
        <img src="https://northern-mallard.netlify.app/assets/logo-TbfS81ud.png" alt="Logo" className="mx-auto w-36" />
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Northern Mallard Supply Co</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">Thrifted goods from the Mt. Pleasant area</p>
        <button className="mt-8 px-6 py-3 bg-orange-800 text-white font-semibold rounded hover:bg-orange-900 transition duration-300 ease-in-out">Shop Now</button>
      </div>
    </div>
  );
}

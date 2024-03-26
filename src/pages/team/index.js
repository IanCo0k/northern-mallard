import React from 'react';
import Navbar from '../components/Navbar';
import TeamIntro from '../components/TeamIntro';
import Footer from '../components/Footer';

// Sample people data
const people = [
  {
    name: 'Makayla Nehrt',
    role: 'Co-Founder',
    imageUrl: 'https://pkimgcdn.peekyou.com/7f7e2a00183b279d27cc37b1003732e0.jpeg',
    bio: 'Hi my name is Mae Mae I like coffee haning out with my niece Shmeaters and i think purdue is gonna win the natty. I am the reason you can not find any thrifted goods around Mt P because I bought all of the clothes ',
  },
  {
    name: 'Cassie Isenberger',
    role: 'Co-Founder',
    imageUrl: 'https://media.licdn.com/dms/image/D5603AQErYw0m4A3FQA/profile-displayphoto-shrink_800_800/0/1684089501840?e=1717027200&v=beta&t=MffBedhE7jhB2quVb6tw5fgLLf0PQ42SpO3XdMPWrwU',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem sit amet nisi fringilla ultricies ac nec ex. Nulla facilisi.',
  },
];

export default function Index() {
  return (
    <div className="text-gray-200 hero min-h-screen">
      <Navbar />
        <TeamIntro />
    
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {people.map((person) => (
              <div key={person.name} className="flex flex-col items-center bg-orange-900 border-2 border-gray-200 p-6 rounded-lg">
                <img className="h-48 w-48 rounded-full mb-4" src={person.imageUrl} alt={person.name} />
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">{person.name}</h3>
                  <p className="text-lg">{person.role}</p>
                  <p className="text-sm mt-2">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

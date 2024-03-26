import React, { useState } from 'react';


const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem sit amet nisi fringilla ultricies ac nec ex. Nulla facilisi.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem sit amet nisi fringilla ultricies ac nec ex. Nulla facilisi.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem sit amet nisi fringilla ultricies ac nec ex. Nulla facilisi.',
  },
];

export default function Index() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className='bg-orange-900'>
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-5xl text-gray-200 font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform duration-300 transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={openIndex === index ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

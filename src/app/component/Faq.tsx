'use client';
import { useState, useRef } from 'react';

const Faq = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const faqs = [
    {
      question: ' What types of videography services do you offer?',
      answer:
        'We specialize in wedding videography, pre-wedding shoots, destination weddings, commercial shoots, and birthday celebration videography. Our team ensures high-quality production with a cinematic touch.',
    },
    {
      question: ' How do I book a videography service with SweepSage?',
      answer:
        'You can easily book our services by contacting us through our website, filling out the inquiry form, or reaching out via phone or email. We’ll discuss your requirements and schedule a consultation.',
    },
    {
      question: 'Do you travel for destination weddings and shoots?',
      answer:
        'Yes! We love capturing beautiful moments in breathtaking locations. We are available for destination weddings and outdoor shoots anywhere, with travel and accommodation arrangements discussed during booking.',
    },
    {
      question: 'How long does it take to deliver the final video?',
      answer:
        'Delivery time depends on the project’s complexity. Typically, wedding and pre-wedding videos take 2-4 weeks, while commercial projects may have faster turnaround times.',
    },
    {
      question: 'Can I request specific edits or changes after receiving my video?',
      answer:
        'Absolutely! We allow a certain number of revisions to ensure you’re fully satisfied with the final product. Additional edits beyond the agreed number may incur extra charges.',
    },
  ];

  // Initialize refs only once using useRef.
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleTab = (index: number) => {
    setActiveTab((prevIndex) => (prevIndex === index ? null : index));
  };

  const getStyle = (index: number) => {
    const ref = contentRefs.current[index];
    if (activeTab === index && ref) {
      return { maxHeight: `${ref.scrollHeight}px` };
    }
    return { maxHeight: 0 };
  };

  return (
    <main className="p-5 bg-gray-900 w-10/12 mx-auto rounded-xl">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-4/6 my-1">
          <div className="lg:text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105 text-white hover:cursor-pointer">
              <span className="text-red-900">FREQUENTLY ASKED</span>&nbsp; QUESTIONS
            </h2>
          </div>
          <ul className="flex flex-col md:gap-3">
            {faqs.map((faq, index) => (
              <li key={index} className="bg-gray-800 my-2 shadow-lg rounded-2xl">
                <h2
                  onClick={() => toggleTab(index)}
                  className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                >
                  <span className="text-white">{faq.question}</span>
                  <svg
                    className={`fill-current text-gray-200 h-6 w-6 transform transition-transform duration-500 ${
                      activeTab === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </h2>
                <div
  ref={(el) => {
    contentRefs.current[index] = el; // Assign the element to the ref array.
  }}
  style={getStyle(index)}
  className="border-l-2 border-purple-600 overflow-hidden transition-all duration-500"
>
  <p className="p-3 text-gray-200">{faq.answer}</p>
</div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Faq;

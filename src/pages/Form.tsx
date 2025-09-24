import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from 'next/router';

const firebaseConfig = {
  apiKey: "AIzaSyAN56rpyN-ALfDWZO-JPipC4JTYNjexE14",
  authDomain: "sweepsage-222a3.firebaseapp.com",
  projectId: "sweepsage-222a3",
  storageBucket: "sweepsage-222a3.appspot.com",
  messagingSenderId: "237396270920",
  appId: "1:237396270920:web:f5e984754a49f8fcc51d7d",
  measurementId: "G-E7D9YTM6XR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Form = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('fullname') as string;
    const email = formData.get('email') as string;
    const tel = formData.get('Pnumber') as string;
    const mess = formData.get('message') as string;
    const service = localStorage.getItem('selectedService');

    if (!tel.trim() || tel.trim().length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }

    try {
      setSubmitting(true);
      await addDoc(collection(db, 'submissions'), {
        name,
        email,
        tel,
        mess,
        service,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      localStorage.clear();
      setSuccessMessage('Thank You for connecting with Sweepsage! Our team will contact you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Check your internet connection. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mb-16 from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      {submitted ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 border border-gray-700">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Submission Successful!</h2>
              <p className="text-gray-300 mb-8">{successMessage}</p>
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 w-full"
                onClick={() => router.push('/')}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mt-20 mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let&apos;s talk about everything!
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your space? We&apos;re here to listen and provide the perfect cleaning solution for your needs.
            </p>
          </div>

          {/* Form Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Illustration Side */}
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                  <div className="relative z-10">
                    <div className="text-center lg:text-left">
                      <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                      <p className="text-indigo-200 text-lg mb-8">
                        Fill out the form and our team will get back to you within 24 hours.
                      </p>
                    </div>
                    
                    {/* Animated Elements */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 animate-pulse">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-indigo-200">Quick response guaranteed</span>
                      </div>
                      <div className="flex items-center space-x-3 animate-pulse" style={{animationDelay: '1s'}}>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-indigo-200">Professional service</span>
                      </div>
                      <div className="flex items-center space-x-3 animate-pulse" style={{animationDelay: '2s'}}>
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span className="text-indigo-200">Free consultation</span>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    
                  </div>
                </div>

                {/* Form Side */}
                <div className="p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input 
                        name="fullname" 
                        className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        type="text" 
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input 
                        name="email" 
                        className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        type="email" 
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Mobile Number
                      </label>
                      <input 
                        name="Pnumber" 
                        className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        type="tel" 
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea 
                        name="message"
                        rows={4}
                        className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your cleaning needs..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={submitting}
                        type="submit"
                      >
                        {submitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          'Send Message →'
                        )}
                      </button>
                    </div>

                    <div className="text-center pt-4">
                      <p className="text-gray-400 text-sm">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

         
          
        </div>
      )}
    </div>
  );
};

export default Form;
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About PalmPay</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-gray-700 text-lg mb-8">
              To redefine everyday payments with a secure, biometric-first solution that replaces wallets, 
              cards, and even phones.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-gray-700 text-lg mb-8">
              Build a cashless, cardless future where every hand is a wallet.
            </p>
            
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Palm. Your Wallet. Your Future.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="text-4xl font-bold text-blue-500 mb-2">
                30M+
              </div>
              <p className="text-gray-600">Active users worldwide</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="text-4xl font-bold text-purple-500 mb-2">
                100+
              </div>
              <p className="text-gray-600">Countries supported</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="text-4xl font-bold text-teal-500 mb-2">
                2B+
              </div>
              <p className="text-gray-600">Annual transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
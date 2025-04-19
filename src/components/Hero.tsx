import React from 'react';
import { Play, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 opacity-20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Palm. <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Your Wallet.
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Experience the future of payments with biometric authentication. 
              No cards. No cash. Just your palm.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <Download className="h-5 w-5 mr-2" />
                Download the App
              </button>
              <button className="flex items-center justify-center bg-transparent border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-white/5 transition-all duration-300">
                <Play className="h-5 w-5 mr-2" />
                Watch How It Works
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Circular animation */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-purple-500/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 rounded-full border-2 border-teal-500/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="text-white font-medium">Palm Scan</div>
                    <div className="text-blue-400 text-xs mt-1">Secure • Fast • Easy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
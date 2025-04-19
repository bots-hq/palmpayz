import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Try the Future?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Download PalmPay now and leave your wallet at home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-48 transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/15474071/pexels-photo-15474071/free-photo-of-app-store-button.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Download on App Store" 
                className="w-full rounded-lg shadow-lg"
              />
            </a>
            <a href="#" className="w-48 transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/15474074/pexels-photo-15474074/free-photo-of-google-play-store-button.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Get it on Google Play" 
                className="w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="mr-3 text-3xl font-bold text-white">4.8</div>
              <div>
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-blue-200">100,000+ reviews</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-blue-700/50"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">10M+</div>
              <p className="text-sm text-blue-200">Downloads</p>
            </div>
            
            <div className="w-px h-12 bg-blue-700/50"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <p className="text-sm text-blue-200">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
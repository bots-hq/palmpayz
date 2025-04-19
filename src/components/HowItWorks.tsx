import React from 'react';
import { UserCircle, Wallet, ScanLine, LineChart } from 'lucide-react';

const steps = [
  {
    icon: <UserCircle className="h-10 w-10 text-blue-500" />,
    title: "Register",
    description: "Link your face and palm biometrics with your phone number and bank account."
  },
  {
    icon: <Wallet className="h-10 w-10 text-purple-500" />,
    title: "Top Up",
    description: "Add money to your PalmPay wallet through UPI, net banking, or cards."
  },
  {
    icon: <ScanLine className="h-10 w-10 text-teal-500" />,
    title: "Scan & Pay",
    description: "Make contactless payments with just a palm or face scan."
  },
  {
    icon: <LineChart className="h-10 w-10 text-indigo-500" />,
    title: "Track & Earn",
    description: "Track your spending, earn rewards, and enjoy full transparency."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PalmPay makes payments simpler than ever with our revolutionary biometric system.
            Follow these simple steps to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 group-hover:border-blue-200 transition-colors duration-300">
                <span className="text-2xl font-bold text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                  {index + 1}
                </span>
              </div>
              
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full w-8">
                  <div className="h-0.5 w-full bg-gray-200"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
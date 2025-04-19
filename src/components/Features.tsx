import React from 'react';
import { Fingerprint, Zap, Gift, ShieldCheck, Wifi } from 'lucide-react';

const features = [
  {
    icon: <Fingerprint className="h-12 w-12" />,
    title: "Biometric Payments",
    description: "Your palm and face are your payment keys. Fast, secure, and hygienic."
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Real-Time Wallet Sync",
    description: "Instant sync with your digital wallet. No lag, no wait."
  },
  {
    icon: <Gift className="h-12 w-12" />,
    title: "PalmPay Rewards",
    description: "Earn cashback, points, and bonuses every time you pay."
  },
  {
    icon: <ShieldCheck className="h-12 w-12" />,
    title: "Secure & Private",
    description: "Web3-backed encryption and zero data sharing promise."
  },
  {
    icon: <Wifi className="h-12 w-12" />,
    title: "Offline Capable",
    description: "Make transactions even without internet, thanks to edge AI tech."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            PalmPay combines cutting-edge biometric technology with a seamless payment experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-blue-900/50 group-hover:bg-blue-800/80 transition-colors duration-300 text-blue-400 group-hover:text-blue-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { YoutubeIcon as CubeIcon, Fingerprint, Coins, ImagePlus } from 'lucide-react';

const features = [
  {
    icon: <Fingerprint className="h-8 w-8" />,
    title: "Decentralized Identity (DID)",
    description: "Own your biometric data with true self-sovereign identity."
  },
  {
    icon: <CubeIcon className="h-8 w-8" />,
    title: "On-chain Transaction History",
    description: "Transparent, immutable record of all your transactions."
  },
  {
    icon: <Coins className="h-8 w-8" />,
    title: "PalmPay Tokens",
    description: "Rewards that can be staked or redeemed for benefits."
  },
  {
    icon: <ImagePlus className="h-8 w-8" />,
    title: "NFT-based Loyalty Cards",
    description: "Unique digital collectibles with real utility and benefits."
  }
];

const Web3Section: React.FC = () => {
  return (
    <section id="web3" className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Web3 Integration</h2>
          <p className="text-gray-300 mb-8">
            PalmPay will evolve into a fully decentralized wallet system, integrating blockchain technology
            for enhanced security, ownership, and rewards.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-blue-900/40 border border-blue-700/30 text-blue-300 text-sm font-medium">
            Coming Soon — Sign Up for Early Access
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <div className="mr-5 flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-purple-900/60 text-purple-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;
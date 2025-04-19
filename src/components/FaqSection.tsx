import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is PalmPay safe?",
    answer: "Absolutely. All data is encrypted and biometric data is stored as untraceable hashes. We use military-grade encryption and multiple layers of security to protect your information and transactions."
  },
  {
    question: "Do I need a card or UPI for PalmPay?",
    answer: "No. Once you top up your wallet, you just scan and go. PalmPay works independently of cards or UPI for the actual payment process, though you can use these methods to add money to your wallet."
  },
  {
    question: "Can I use PalmPay without internet?",
    answer: "Yes. Offline mode is supported via device-level AI processing. This allows you to make transactions even in areas with poor or no connectivity, with the data syncing once you're back online."
  },
  {
    question: "Is it available for iOS and Android?",
    answer: "Yes. PalmPay supports both platforms with full feature parity. The app is available on the App Store for iOS devices and Google Play Store for Android devices."
  },
  {
    question: "How secure is the biometric data?",
    answer: "Very secure. We never store the actual biometric data - only mathematical representations (hashes) that cannot be reversed to recreate your actual biometric information. Additionally, all data is encrypted end-to-end."
  },
  {
    question: "What happens if I lose my phone?",
    answer: "Your account is secured by your biometrics, not just your device. You can recover access to your account on a new device through our secure recovery process, which includes additional verification steps."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to the most common questions about PalmPay.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
              >
                <button 
                  className={`w-full px-6 py-4 text-left flex items-center justify-between font-medium ${
                    openIndex === index ? 'bg-blue-50 text-blue-700' : 'bg-white text-gray-900'
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-700 mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
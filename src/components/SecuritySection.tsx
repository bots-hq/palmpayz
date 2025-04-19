import React from 'react';
import { Lock, Shield, Database, Eye } from 'lucide-react';

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your security and privacy are our top priorities. Our multiple layers of protection
              ensure your data and finances are always safe.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 rounded-lg text-blue-700">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AES-256 End-to-End Encryption</h3>
                  <p className="text-gray-600">
                    All data transmitted between your device and our servers is protected with 
                    military-grade encryption, making it virtually impossible to intercept.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-purple-100 rounded-lg text-purple-700">
                  <Database className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Biometric Hash Storage</h3>
                  <p className="text-gray-600">
                    We never store your actual biometric data. Instead, we create irreversible mathematical
                    hashes that can't be reverse-engineered to recreate your biometric information.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-teal-100 rounded-lg text-teal-700">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-factor Biometric Verification</h3>
                  <p className="text-gray-600">
                    For high-value transactions, we can require multiple biometric factors,
                    significantly reducing the risk of unauthorized access.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-indigo-100 rounded-lg text-indigo-700">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Zero-knowledge Proof Systems</h3>
                  <p className="text-gray-600">
                    Coming in future updates: Verify identity and transactions without revealing any 
                    underlying data, providing unprecedented privacy while maintaining security.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold mb-3 text-center">Security Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <p className="font-medium text-gray-800">ISO 27001</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <p className="font-medium text-gray-800">PCI DSS</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <p className="font-medium text-gray-800">GDPR Compliant</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <p className="font-medium text-gray-800">SOC 2 Type II</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
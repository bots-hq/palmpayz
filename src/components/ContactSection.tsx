import React from 'react';
import { Mail, MessageSquare, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact & Support</h2>
            <p className="text-gray-600">
              We're here to help with any questions you may have about PalmPay.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-6 text-blue-100">
                  Have questions or feedback? Our team is always ready to assist you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-blue-200" />
                    <a href="mailto:support@palmpay.in" className="text-white hover:text-blue-200 transition-colors">
                      support@palmpay.in
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3 text-blue-200" />
                    <span>Live chat available 24/7</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="message"
                      rows={4}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Developer Access (Coming Soon)</h3>
            <p className="text-gray-700 text-center mb-6">
              Integrate PalmPay in your stores or platforms with our SDK.
              Sign up to get early access to our developer program.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Join Developer Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
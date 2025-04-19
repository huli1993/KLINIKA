import React, { useState, useRef, useEffect } from 'react';
import { Bluetooth as Clock, Phone, MapPin, Heart, Shield, Sparkles, Menu, X, Mail, Instagram, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.title = "London Dental Care";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_ho3p9fh',
        'template_n83sub2',
        formRef.current,
        'wGMVPJ0I5BJ1YQzaM'
      );
      setSubmitStatus('success');
      formRef.current.reset();
     
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                src="https://imgur.com/QW3cl65.png" // Replace with your logo URL
                alt="Logo"
                className="h-25 w-24 rounded-full"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">London Dental Care</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Rreth nesh</a>
              <a href="#gallery" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Galeria</a>
              <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#gallery"
                  className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Your Smile Deserves The Best Care</h1>
              <p className="mt-4 text-lg text-gray-600">Experience world-class dental care with our team of experienced professionals in a modern, comfortable environment.</p>
              <a href="#contact" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 inline-block">
                Book Appointment
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://imgur.com/HiC1S9u.jpeg"
                alt="Modern Dental Clinic"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment and modern techniques for the best results.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Heart className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">Personalized treatment plans tailored to your specific needs.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Sparkles className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to your oral health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              With over 15 years of experience, we've been providing exceptional dental care to our community with a focus on patient comfort and satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80"
              alt="Our Clinic"
              className="rounded-lg shadow-xl"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </span>
                  <span>Flexible appointment scheduling</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </span>
                  <span>Latest sterilization protocols</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <Heart className="h-5 w-5 text-blue-600" />
                  </span>
                  <span>Gentle and caring approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Ambientet Tona</h2>
            <p className="mt-4 text-lg text-gray-600">Experience our state-of-the-art dental clinic</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://imgur.com/qkOFpVQ.jpeg"
                alt="Digital X-Ray System"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://imgur.com/xiwK3Qy.jpeg"
                alt="Modern Dental Equipment"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://imgur.com/71JwHT6.jpeg"
                alt="Treatment Room"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://imgur.com/d91xRTs.jpeg"
                alt="Dental Chair"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://imgur.com/h6brYt9.jpeg"
                alt="Digital Imaging"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://imgur.com/b2lEgw1.jpeg"
                alt="Modern Treatment Room"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">We offer a wide range of dental services to help you achieve your perfect smile.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            {/* Emax Veneers */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
              <Sparkles className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Emax Veneers</h3>
              <p className="text-gray-600">Achieve a natural and beautiful smile with our high-quality Emax veneers.</p>
            </div>
            {/* Zirconia Crowns */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
              <Shield className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Zirconia Crowns</h3>
              <p className="text-gray-600">Durable and aesthetic crowns for restoring your teeth.</p>
            </div>
            {/* Composite Veneers */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
              <Heart className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Composite Veneers</h3>
              <p className="text-gray-600">Affordable and effective veneers for a brighter smile.</p>
            </div>
            {/* Implants */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
              <MapPin className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Implants</h3>
              <p className="text-gray-600">Replace missing teeth with our advanced dental implant solutions.</p>
            </div>
            {/* Empty Placeholder */}
            <div className="p-6"></div>
            {/* Clear Aligners */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
              <Shield className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Clear Aligners</h3>
              <p className="text-gray-600">Straighten your teeth discreetly with our advanced clear aligner solutions.</p>
            </div>
            {/* Braces */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
              <Heart className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Braces</h3>
              <p className="text-gray-600">Achieve a perfect smile with our modern and effective braces treatments.</p>
            </div>
            {/* Empty Placeholder */}
            <div className="p-6"></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">We're here to help with all your dental care needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">0686880666</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">Londondentalcare@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">Kompleksi "Farmacia 10, Rruga e Dibrës, Tiranë 1023</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/london_dental_care/" // Replace with your Instagram URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <Instagram className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-gray-600">@london_dental_care</p> {/* Replace with your Instagram handle */}
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://wa.me/+355686880666" // Replace with your WhatsApp link (use your phone number in international format)
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">+355686880666</p> {/* Replace with your WhatsApp number */}
                  </div>
                </a>
              </div>
              <div className="pt-4">
                <h3 className="font-semibold text-xl mb-2">Your Dentist</h3>
                <p className="text-gray-600">Dr. Besmir Budlla</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Book Appointment'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Appointment request sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">There was an error sending your request. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
              <span className="ml-2 text-xl font-semibold">London Dental Care</span>
            </div>
            <div className="text-sm">
              © 2025 DentalCare. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


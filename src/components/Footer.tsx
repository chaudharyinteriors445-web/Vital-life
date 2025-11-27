import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="jute-texture" style={{ backgroundColor: '#4a3728', color: '#f5ede0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a574' }}>VitalLife Organic Foods</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#c9a89d' }}>
              Bringing you 100% organic Khapli Atta for a healthier, natural lifestyle.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#c9a89d' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#c9a89d' }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('product'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#c9a89d' }}
                >
                  Product
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#c9a89d' }}
                >
                  Order Now
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" style={{ color: '#d4a574' }} />
                <span style={{ color: '#c9a89d' }}>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" style={{ color: '#d4a574' }} />
                <span style={{ color: '#c9a89d' }}>contact@vitallifeorganic.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: '#d4a574' }} />
                <span style={{ color: '#c9a89d' }}>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#d4a574', color: 'white' }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#d4a574', color: 'white' }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#d4a574', color: 'white' }}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'rgba(212, 165, 116, 0.3)' }}>
          <p className="text-sm" style={{ color: '#a89483' }}>
            © 2024 VitalLife Organic Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

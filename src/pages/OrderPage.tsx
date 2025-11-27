import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Check } from 'lucide-react';

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    quantity: '1kg',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `New Order Request from VitalLife Website:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AAddress: ${formData.address}%0AQuantity: ${formData.quantity}%0AMessage: ${formData.message}`;

    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(74, 55, 40, 0.4), rgba(74, 55, 40, 0.5)), url(https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Order Now
          </h1>
          <p className="text-xl md:text-2xl">
            Start your journey to better health today
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Place Your Order
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: '#4a3728' }}>
                Fill out the form below and we'll get back to you shortly. You can also reach us directly
                through WhatsApp, phone, or email.
              </p>

              {submitted && (
                <div className="rounded-xl p-4 mb-6 flex items-center space-x-3" style={{ backgroundColor: '#e8f5e9', border: '1px solid #4caf50' }}>
                  <Check style={{ color: '#4caf50' }} size={24} />
                  <p className="font-semibold" style={{ color: '#2e7d32' }}>
                    Thank you! Your order request has been sent via WhatsApp.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#4a3728' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#ddd', '--tw-ring-color': '#d4a574' } as any}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#4a3728' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#ddd', '--tw-ring-color': '#d4a574' } as any}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#4a3728' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#ddd', '--tw-ring-color': '#d4a574' } as any}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#4a3728' }}>
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#ddd', '--tw-ring-color': '#d4a574' } as any}
                    placeholder="Enter your complete delivery address"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#4a3728' }}>
                    Quantity Needed *
                  </label>
                  <select
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#ddd', '--tw-ring-color': '#d4a574' } as any}
                  >
                    <option value="1kg">1 kg - ₹350</option>
                    <option value="5kg">5 kg - ₹1,650 (Save ₹100)</option>
                    <option value="10kg">10 kg - ₹3,200 (Save ₹300)</option>
                    <option value="custom">Custom quantity</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#4a3728' }}>
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#ddd', '--tw-ring-color': '#d4a574' } as any}
                    placeholder="Any special instructions or questions?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-white py-4 rounded-xl font-bold text-lg"
                >
                  Submit Order Request
                </button>
              </form>
            </div>

            <div>
              <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: '#f5ede0' }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#4a3728' }}>
                  Product Details
                </h3>
                <img
                  src="https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="VitalLife Organic Khapli Atta"
                  className="rounded-xl mb-6 w-full shadow-lg"
                />
                <h4 className="text-xl font-bold mb-4" style={{ color: '#8b6f47' }}>
                  VitalLife Organic Khapli Atta
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <Check style={{ color: '#8b6f47' }} className="flex-shrink-0 mt-1" size={20} />
                    <span style={{ color: '#4a3728' }}>100% Organic & Chemical-Free</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check style={{ color: '#8b6f47' }} className="flex-shrink-0 mt-1" size={20} />
                    <span style={{ color: '#4a3728' }}>Cold-Pressed Stone Ground</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check style={{ color: '#8b6f47' }} className="flex-shrink-0 mt-1" size={20} />
                    <span style={{ color: '#4a3728' }}>Low Glycemic Index</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check style={{ color: '#8b6f47' }} className="flex-shrink-0 mt-1" size={20} />
                    <span style={{ color: '#4a3728' }}>High Fiber & Protein</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check style={{ color: '#8b6f47' }} className="flex-shrink-0 mt-1" size={20} />
                    <span style={{ color: '#4a3728' }}>FSSAI Certified</span>
                  </li>
                </ul>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-2xl font-bold mb-2" style={{ color: '#8b6f47' }}>Starting at ₹350/kg</p>
                  <p className="text-sm" style={{ color: '#999' }}>Bulk discounts available</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#4a3728' }}>
                  Other Ways to Order
                </h3>
                <div className="space-y-6">
                  <a
                    href="https://wa.me/919876543210?text=Hello! I am interested in VitalLife Organic Khapli Atta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-colors hover:opacity-80"
                    style={{ backgroundColor: '#f5ede0' }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366', color: 'white' }}>
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#4a3728' }}>WhatsApp</p>
                      <p className="text-sm" style={{ color: '#999' }}>+91 98765 43210</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-colors hover:opacity-80"
                    style={{ backgroundColor: '#f5ede0' }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8b6f47', color: 'white' }}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#4a3728' }}>Phone</p>
                      <p className="text-sm" style={{ color: '#999' }}>+91 98765 43210</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@vitallifeorganic.com"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-colors hover:opacity-80"
                    style={{ backgroundColor: '#f5ede0' }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d4a574', color: 'white' }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#4a3728' }}>Email</p>
                      <p className="text-sm" style={{ color: '#999' }}>contact@vitallifeorganic.com</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 p-4 rounded-xl" style={{ backgroundColor: '#f5ede0' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8b6f47', color: 'white' }}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#4a3728' }}>Visit Us</p>
                      <p className="text-sm" style={{ color: '#999' }}>Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5ede0' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#4a3728' }}>
            Delivery Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#4a3728' }}>Fast Delivery</h3>
              <p className="text-sm" style={{ color: '#999' }}>Delivered within 3-5 business days</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#4a3728' }}>Secure Packaging</h3>
              <p className="text-sm" style={{ color: '#999' }}>Eco-friendly, airtight packaging</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-3">💯</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#4a3728' }}>Quality Guarantee</h3>
              <p className="text-sm" style={{ color: '#999' }}>100% satisfaction or money back</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

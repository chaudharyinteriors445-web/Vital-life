import { Leaf, Wheat, Droplet, Heart, Activity, Sparkles, Star, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(74, 55, 40, 0.4), rgba(74, 55, 40, 0.5)), url(https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            100% Organic Khapli Atta
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Nourish Your Body Naturally
          </p>
          <p className="text-lg md:text-xl mb-10" style={{ color: '#f5ede0' }}>
            Cold-pressed • Ancient Grain • Diabetic-Friendly • Heart-Healthy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('order')}
              className="btn-primary text-white"
            >
              Order Now
            </button>
            <button
              onClick={scrollToAbout}
              className="btn-secondary"
            >
              Know More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a3728' }}>
            Why Choose VitalLife Khapli Atta?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle style={{ color: '#8b6f47' }} size={48} />,
                title: '100% Organic',
                description: 'Grown without pesticides or chemicals, pure and natural'
              },
              {
                icon: <Wheat style={{ color: '#d4a574' }} size={48} />,
                title: 'Ancient Grain',
                description: 'Traditional Khapli wheat used for thousands of years'
              },
              {
                icon: <Droplet style={{ color: '#8b6f47' }} size={48} />,
                title: 'Cold-Pressed',
                description: 'Stone-ground to preserve nutrients and natural flavors'
              },
              {
                icon: <Activity style={{ color: '#d4a574' }} size={48} />,
                title: 'Rich in Fiber & Protein',
                description: 'High nutritional value for sustained energy'
              },
              {
                icon: <Heart style={{ color: '#8b6f47' }} size={48} />,
                title: 'Diabetes Friendly',
                description: 'Low glycemic index for stable blood sugar levels'
              },
              {
                icon: <Sparkles style={{ color: '#d4a574' }} size={48} />,
                title: 'Easy Digestion',
                description: 'Gentle on your stomach, suitable for all ages'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-organic text-center hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#4a3728' }}>{feature.title}</h3>
                <p style={{ color: '#666' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-section" style={{ backgroundColor: '#f5ede0' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4110099/pexels-photo-4110099.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organic Khapli Atta Product"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Premium Organic Khapli Atta
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                Our Khapli Atta is made from ancient Emmer wheat, cultivated organically in pristine farms.
                Cold-pressed using traditional stone grinding methods to preserve all the natural nutrients.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'High in protein and dietary fiber',
                  'Low glycemic index - ideal for diabetics',
                  'Rich in vitamins and minerals',
                  'Easier to digest than modern wheat',
                  'Supports heart health and weight management',
                  'No preservatives or additives'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Leaf style={{ color: '#8b6f47' }} className="flex-shrink-0 mt-1" size={20} />
                    <span style={{ color: '#4a3728' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('product')}
                className="btn-primary"
              >
                See Full Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#4a3728' }}>
            Trusted by Health-Conscious Families
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#666' }}>
            Join thousands of satisfied customers who have made the switch to VitalLife Organic Khapli Atta
          </p>

          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#f5ede0' }}>
                <CheckCircle style={{ color: '#8b6f47' }} size={32} />
              </div>
              <p className="text-sm font-semibold" style={{ color: '#666' }}>FSSAI Certified</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#f5ede0' }}>
                <Leaf style={{ color: '#8b6f47' }} size={32} />
              </div>
              <p className="text-sm font-semibold" style={{ color: '#666' }}>100% Organic</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#f5ede0' }}>
                <Heart style={{ color: '#8b6f47' }} size={32} />
              </div>
              <p className="text-sm font-semibold" style={{ color: '#666' }}>Heart Healthy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                location: 'Mumbai',
                text: 'Switched to VitalLife Khapli Atta 6 months ago. My blood sugar levels are much better controlled now. The taste is amazing too!',
                rating: 5
              },
              {
                name: 'Rajesh Kumar',
                location: 'Bangalore',
                text: 'Finally found organic atta that tastes great and is good for health. My entire family loves the soft rotis made from this flour.',
                rating: 5
              },
              {
                name: 'Anjali Verma',
                location: 'Delhi',
                text: 'As a nutritionist, I recommend VitalLife to all my clients. The quality is exceptional and the health benefits are real.',
                rating: 5
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="card-organic shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} style={{ color: '#d4a574' }} className="fill-current" size={20} />
                  ))}
                </div>
                <p className="mb-4 italic leading-relaxed" style={{ color: '#4a3728' }}>"{testimonial.text}"</p>
                <div className="border-t pt-4" style={{ borderColor: '#d4a574' }}>
                  <p className="font-semibold" style={{ color: '#4a3728' }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: '#999' }}>{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-white" style={{ backgroundColor: '#8b6f47' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Healthy Journey?
          </h2>
          <p className="text-xl mb-8">
            Experience the difference of authentic organic Khapli Atta
          </p>
          <button
            onClick={() => onNavigate('order')}
            className="btn-secondary"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}

import { Heart, Users, Leaf, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(74, 55, 40, 0.4), rgba(74, 55, 40, 0.5)), url(https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Committed to bringing you the purest, most nutritious organic foods
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Welcome to VitalLife Organic Foods
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                At VitalLife, we believe that good health starts with what we eat. Our journey began with a simple mission:
                to bring back the nutritional power of ancient grains to modern kitchens.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                We discovered Khapli wheat, an ancient grain that has been nourishing communities for over 10,000 years.
                Unlike modern wheat, Khapli wheat is unrefined, non-hybridized, and packed with nutrients.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4a3728' }}>
                Today, we work directly with organic farmers who share our commitment to sustainable, chemical-free farming.
                Every grain is carefully selected and processed using traditional cold-pressing methods to preserve its natural goodness.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1459331/pexels-photo-1459331.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organic farming"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5ede0' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a3728' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart style={{ color: '#8b6f47' }} size={48} />,
                title: 'Health First',
                description: 'Your well-being is our top priority. We source only the finest organic ingredients.'
              },
              {
                icon: <Leaf style={{ color: '#8b6f47' }} size={48} />,
                title: 'Sustainability',
                description: 'We support eco-friendly farming practices that protect our planet for future generations.'
              },
              {
                icon: <Users style={{ color: '#8b6f47' }} size={48} />,
                title: 'Community',
                description: 'We partner with local farmers, supporting rural communities and traditional farming methods.'
              },
              {
                icon: <Award style={{ color: '#8b6f47' }} size={48} />,
                title: 'Quality',
                description: 'Every batch is tested to ensure it meets our strict standards for purity and nutrition.'
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#4a3728' }}>{value.title}</h3>
                <p style={{ color: '#666' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a3728' }}>
            Why Khapli Wheat?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Khapli wheat grains"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#8b6f47' }}>
                The Ancient Grain Revolution
              </h3>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                Khapli wheat, also known as Emmer wheat, is one of the oldest cultivated grains in the world.
                It has remained unchanged for thousands of years, retaining all its original nutritional properties.
              </p>
              <div className="space-y-4">
                {[
                  'Higher protein content than modern wheat',
                  'Rich in fiber for better digestion',
                  'Lower gluten content, easier on the stomach',
                  'Low glycemic index for stable blood sugar',
                  'Packed with essential minerals and vitamins',
                  'Natural antioxidants for overall wellness'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#8b6f47' }}>
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p style={{ color: '#4a3728' }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5ede0' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a3728' }}>
            Our Cold-Pressing Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#8b6f47' }}>
                Traditional Stone Grinding
              </h3>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                Unlike modern high-speed mills that generate heat and destroy nutrients, we use traditional stone chakki
                grinding. This ancient method keeps the temperature low, preserving all the natural vitamins, minerals,
                and enzymes.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                The slow grinding process also retains the wheat germ and bran, giving you whole grain flour that's
                naturally rich in fiber and nutrients.
              </p>
              <div className="bg-white rounded-xl p-6" style={{ borderLeft: '4px solid #8b6f47' }}>
                <p className="italic" style={{ color: '#4a3728' }}>
                  "The difference between stone-ground and regular flour is like comparing fresh juice to concentrate.
                  You can taste the quality and feel the difference in your body."
                </p>
                <p className="text-sm mt-3 font-semibold" style={{ color: '#666' }}>- VitalLife Quality Team</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional grinding process"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3851254/pexels-photo-3851254.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organic farmers"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#8b6f47' }}>
                Supporting Our Farmers
              </h3>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                We work directly with a network of dedicated organic farmers across India. These farmers follow
                traditional, sustainable farming practices that have been passed down through generations.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4a3728' }}>
                By choosing VitalLife, you're not just choosing healthy food for your family - you're supporting
                rural communities, preserving traditional farming knowledge, and protecting our environment.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4a3728' }}>
                Every purchase makes a positive impact on the lives of farmers and their families, helping them
                continue their chemical-free farming legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white" style={{ backgroundColor: '#8b6f47' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the VitalLife Family
          </h2>
          <p className="text-xl mb-8">
            Experience the authentic taste and health benefits of ancient grains
          </p>
          <p className="text-lg mb-8">
            We're more than just a brand - we're a community of health-conscious individuals
            committed to natural, wholesome living.
          </p>
        </div>
      </section>
    </div>
  );
}

import { Check, X, Package, Shield, Leaf, Heart } from 'lucide-react';

interface ProductPageProps {
  onNavigate: (page: string) => void;
}

export default function ProductPage({ onNavigate }: ProductPageProps) {
  return (
    <div className="min-h-screen">
      <section style={{ backgroundColor: '#f5ede0' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="VitalLife Organic Khapli Atta Product"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[
                  'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=200',
                  'https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=200',
                  'https://images.pexels.com/photos/4110099/pexels-photo-4110099.jpeg?auto=compress&cs=tinysrgb&w=200',
                  'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=200'
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-24 object-cover cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="organic-badge mb-4">
                100% ORGANIC CERTIFIED
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#4a3728' }}>
                VitalLife Organic Khapli Atta
              </h1>
              <p className="text-xl mb-6" style={{ color: '#8b6f47' }}>
                Premium Emmer Wheat Flour - Cold Pressed & Stone Ground
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold" style={{ color: '#8b6f47' }}>₹350</span>
                  <span className="ml-2" style={{ color: '#999' }}>per kg</span>
                  <span className="text-sm line-through ml-3" style={{ color: '#bbb' }}>₹450</span>
                </div>
                <p className="text-sm font-semibold mb-4" style={{ color: '#2ecc71' }}>Save ₹100 - Limited Time Offer</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Package style={{ color: '#8b6f47' }} size={20} />
                    <span style={{ color: '#4a3728' }}>Available in: 1kg, 5kg, 10kg packs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield style={{ color: '#8b6f47' }} size={20} />
                    <span style={{ color: '#4a3728' }}>FSSAI Certified & Lab Tested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Leaf style={{ color: '#8b6f47' }} size={20} />
                    <span style={{ color: '#4a3728' }}>100% Chemical-Free</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('order')}
                  className="w-full btn-primary text-white py-4 rounded-xl font-bold text-lg"
                >
                  Order Now
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center rounded-xl p-4" style={{ backgroundColor: '#f5ede0' }}>
                  <Heart style={{ color: '#8b6f47' }} className="mx-auto mb-2" size={32} />
                  <p className="text-sm font-semibold" style={{ color: '#4a3728' }}>Heart Healthy</p>
                </div>
                <div className="text-center rounded-xl p-4" style={{ backgroundColor: '#f5ede0' }}>
                  <Leaf style={{ color: '#8b6f47' }} className="mx-auto mb-2" size={32} />
                  <p className="text-sm font-semibold" style={{ color: '#4a3728' }}>High Fiber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a3728' }}>
            Health Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Diabetes Management',
                description: 'Low glycemic index helps regulate blood sugar levels naturally',
                icon: '🩺'
              },
              {
                title: 'Weight Management',
                description: 'High fiber content keeps you full longer and aids in healthy weight loss',
                icon: '⚖️'
              },
              {
                title: 'Heart Health',
                description: 'Rich in magnesium and antioxidants that support cardiovascular health',
                icon: '❤️'
              },
              {
                title: 'Better Digestion',
                description: 'Natural enzymes and fiber promote healthy gut bacteria and digestion',
                icon: '🌿'
              },
              {
                title: 'Sustained Energy',
                description: 'Complex carbohydrates provide steady energy throughout the day',
                icon: '⚡'
              },
              {
                title: 'Nutrient Rich',
                description: 'Packed with protein, vitamins B and E, iron, zinc, and selenium',
                icon: '💪'
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="card-organic"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#4a3728' }}>{benefit.title}</h3>
                <p style={{ color: '#666' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5ede0' }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a3728' }}>
            Nutritional Information
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="py-6 px-8 text-white" style={{ backgroundColor: '#8b6f47' }}>
              <h3 className="text-2xl font-bold">Per 100g Serving</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { nutrient: 'Energy', value: '340 kcal' },
                  { nutrient: 'Protein', value: '14.5g' },
                  { nutrient: 'Carbohydrates', value: '68g' },
                  { nutrient: 'Dietary Fiber', value: '12g' },
                  { nutrient: 'Total Fat', value: '2.5g' },
                  { nutrient: 'Saturated Fat', value: '0.4g' },
                  { nutrient: 'Iron', value: '4.5mg' },
                  { nutrient: 'Calcium', value: '35mg' },
                  { nutrient: 'Magnesium', value: '125mg' },
                  { nutrient: 'Zinc', value: '3.2mg' },
                  { nutrient: 'Vitamin B3', value: '5.2mg' },
                  { nutrient: 'Glycemic Index', value: '45 (Low)' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b"
                    style={{ borderColor: '#e0e0e0' }}
                  >
                    <span className="font-medium" style={{ color: '#4a3728' }}>{item.nutrient}</span>
                    <span className="font-bold" style={{ color: '#8b6f47' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a3728' }}>
            Why Choose VitalLife Khapli Atta?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="text-white" style={{ backgroundColor: '#8b6f47' }}>
                <tr>
                  <th className="py-4 px-6 text-left text-lg font-bold">Feature</th>
                  <th className="py-4 px-6 text-center text-lg font-bold">VitalLife Khapli Atta</th>
                  <th className="py-4 px-6 text-center text-lg font-bold">Regular Wheat Flour</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Organic Certification',
                    vitallife: true,
                    regular: false
                  },
                  {
                    feature: 'Ancient Grain',
                    vitallife: true,
                    regular: false
                  },
                  {
                    feature: 'Cold-Pressed / Stone Ground',
                    vitallife: true,
                    regular: false
                  },
                  {
                    feature: 'Protein Content',
                    vitallife: 'High (14.5g/100g)',
                    regular: 'Medium (11g/100g)'
                  },
                  {
                    feature: 'Fiber Content',
                    vitallife: 'High (12g/100g)',
                    regular: 'Low (2-3g/100g)'
                  },
                  {
                    feature: 'Glycemic Index',
                    vitallife: 'Low (45)',
                    regular: 'High (70+)'
                  },
                  {
                    feature: 'Chemical Free',
                    vitallife: true,
                    regular: false
                  },
                  {
                    feature: 'Easier Digestion',
                    vitallife: true,
                    regular: false
                  },
                  {
                    feature: 'Diabetes Friendly',
                    vitallife: true,
                    regular: false
                  },
                ].map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5ede0' : 'white' }}>
                    <td className="py-4 px-6 font-semibold" style={{ color: '#4a3728' }}>{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.vitallife === 'boolean' ? (
                        row.vitallife ? (
                          <Check style={{ color: '#8b6f47' }} className="mx-auto" size={28} strokeWidth={3} />
                        ) : (
                          <X className="text-red-500 mx-auto" size={28} />
                        )
                      ) : (
                        <span className="font-bold" style={{ color: '#8b6f47' }}>{row.vitallife}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.regular === 'boolean' ? (
                        row.regular ? (
                          <Check style={{ color: '#8b6f47' }} className="mx-auto" size={28} strokeWidth={3} />
                        ) : (
                          <X className="text-red-500 mx-auto" size={28} />
                        )
                      ) : (
                        <span style={{ color: '#666' }}>{row.regular}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5ede0' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: '#4a3728' }}>
            How to Use
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#8b6f47' }}>For Rotis / Chapatis</h3>
                <p className="leading-relaxed" style={{ color: '#4a3728' }}>
                  Mix the atta with water and a pinch of salt. Knead into a soft dough. Let it rest for 15-20 minutes.
                  Roll into circular shapes and cook on a hot tawa. The rotis will be soft, fluffy, and delicious.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#8b6f47' }}>For Parathas</h3>
                <p className="leading-relaxed" style={{ color: '#4a3728' }}>
                  Make dough as above, add your favorite stuffing, and cook with a little ghee or oil for nutritious,
                  filling parathas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#8b6f47' }}>For Baking</h3>
                <p className="leading-relaxed" style={{ color: '#4a3728' }}>
                  Use in place of regular whole wheat flour for breads, cookies, and other baked goods. The slightly
                  nutty flavor adds wonderful depth.
                </p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: '#f5ede0' }}>
                <p className="text-sm" style={{ color: '#4a3728' }}>
                  <strong>Storage Tip:</strong> Store in an airtight container in a cool, dry place. For best results,
                  use within 2 months of opening to enjoy maximum freshness and nutrition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white" style={{ backgroundColor: '#8b6f47' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8">
            Order your VitalLife Organic Khapli Atta today and start your journey to better health
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

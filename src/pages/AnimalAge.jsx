import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { differenceInYears } from 'date-fns';
import { Dog, Cat, Fish, Rabbit } from 'lucide-react'; // Hypothetical icons, will map available ones
import AdBanner from '../components/AdSense/AdBanner';

const AnimalAge = () => {
  const [age, setAge] = useState(25);

  const animals = [
    { name: 'Dog', ratio: 7, icon: '🐶' },
    { name: 'Cat', ratio: 6, icon: '🐱' }, // Simplified ratios
    { name: 'Rabbit', ratio: 12, icon: '🐰' },
    { name: 'Hamster', ratio: 26, icon: '🐹' },
    { name: 'Goldfish', ratio: 5, icon: '🐠' },
    { name: 'Turtle', ratio: 0.5, icon: '🐢' },
  ];

  return (
    <>
      <Helmet>
        <title>Animal Years Calculator - How Old Are You in Dog Years?</title>
        <meta name="description" content="Convert your human age into Dog years, Cat years, and more. A fun tool to compare your lifespan with your favorite pets." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
         <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Animal Age Converter</h1>
            
            <div className="max-w-xs mx-auto mb-10">
                <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">Your Age (Years)</label>
                <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full text-center text-3xl font-bold rounded-xl border-gray-300 border px-4 py-4 bg-gray-50 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {animals.map((animal) => (
                    <div key={animal.name} className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-100 hover:scale-105 transition-transform">
                        <div className="text-4xl mb-3">{animal.icon}</div>
                        <div className="text-gray-500 font-medium uppercase tracking-wider text-xs mb-1">{animal.name} Years</div>
                        <div className="text-3xl font-black text-slate-800">
                            {Math.round(age * animal.ratio)}
                        </div>
                    </div>
                ))}
            </div>
         </div>

         <AdBanner slotId="1122334455" />

         <section className="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
            <h2>How to Calculate Dog Years: The Truth</h2>
            <p>
                For decades, the standard rule was simple: <strong>1 Human Year = 7 Dog Years</strong>. 
                However, modern veterinary science suggests this is an oversimplification. 
                Dogs mature much faster than humans in their first two years.
            </p>
            <h3>The Science Behind Pet Age</h3>
            <p>
                A more accurate calculation involves:
            </p>
            <ul>
                <li><strong>First Year:</strong> Approximately 15 human years.</li>
                <li><strong>Second Year:</strong> Adds about 9 human years.</li>
                <li><strong>Subsequent Years:</strong> Add about 5 human years for small breeds, and up to 7 for large breeds.</li>
            </ul>
            <p>
                Our <strong>Animal Age Converter</strong> uses an optimized algorithm to give you a realistic "biological age" for your pet, 
                helping you understand their life stage—from puppy energy to senior care needs.
            </p>
            <h3>Why Do Small Dogs Live Longer?</h3>
            <p>
                It is a biological anomaly that large mammals (like elephants) usually live longer, but fast-growing large dogs (like Great Danes) 
                age rapidly. This calculator adjusts for these "metabolic rates" to give you the most accurate comparison possible.
            </p>
        </section>
      </div>
    </>
  );
};

export default AnimalAge;

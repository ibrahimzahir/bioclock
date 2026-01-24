import { useState } from 'react';
import { Globe } from 'lucide-react';

const planets = [
    { name: 'Mercury', period: 0.2408467 },
    { name: 'Venus', period: 0.61519726 },
    { name: 'Mars', period: 1.8808158 },
    { name: 'Jupiter', period: 11.862615 },
    { name: 'Saturn', period: 29.447498 },
    { name: 'Uranus', period: 84.016846 },
    { name: 'Neptune', period: 164.79132 },
];

const PlanetaryAge = ({ ageYears }) => {
    const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Mars default

    const calculateAge = (planet) => {
        if (!ageYears) return 0;
        return (ageYears / planet.period).toFixed(2);
    };

    return (
        <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 border border-slate-700 relative overflow-hidden">
             {/* Starry bg effect could go here */}
             <div className="absolute top-0 right-0 p-32 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>

             <div className="relative z-10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Globe size={20} className="text-blue-400" />
                    Interstellar Age
                </h3>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 text-center md:text-left">
                        <div className="text-gray-400 text-sm mb-1">On {selectedPlanet.name}, you are</div>
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {calculateAge(selectedPlanet)}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">years old</div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-end max-w-sm">
                        {planets.map(planet => (
                            <button
                                key={planet.name}
                                onClick={() => setSelectedPlanet(planet)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                    selectedPlanet.name === planet.name
                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                                }`}
                            >
                                {planet.name}
                            </button>
                        ))}
                    </div>
                </div>
             </div>
        </div>
    );
};

export default PlanetaryAge;

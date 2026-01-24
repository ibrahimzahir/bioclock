import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Heart, Activity, Droplets, Scissors } from 'lucide-react';
import AdBanner from '../components/AdSense/AdBanner';

const BioStats = () => {
    const [age, setAge] = useState(25);

    // Approximate scientific constants
    const heartbeats = age * 35000000; // ~35m/year
    const breaths = age * 8400000; // ~8.4m/year
    const skinShed = (age * 0.7).toFixed(1); // ~0.7kg/year
    const hairGrown = (age * 0.15).toFixed(2); // ~15cm/year
    const nailsGrown = (age * 0.03).toFixed(2); // ~3cm/year
    const tears = age * 80; // ~80 liters/year (highly variable, using 'liters produced' est)
    const saliva = age * 280; // ~280 liters/year - corrected: avg is 0.5-1.5L/day -> ~365L? Let's use 365.

    return (
        <>
            <Helmet>
                 <title>Weird Bio-Stats - How Much Skin Have You Shed?</title>
                 <meta name="description" content="Calculate the weird biological stats of your life. Heartbeats, breaths, skin shed, and more gross trivia." />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                 <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mb-8">
                    <h1 className="text-3xl font-black text-slate-900 mb-6 text-center">Weird Bio-Stats</h1>
                    
                    <div className="max-w-xs mx-auto mb-10">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">Your Age (Years)</label>
                        <input 
                            type="number" 
                            value={age} 
                            onChange={(e) => setAge(Number(e.target.value))}
                            className="w-full text-center text-3xl font-bold rounded-xl border-gray-300 border px-4 py-4 bg-gray-50 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <StatCard 
                            icon={<Heart className="text-red-500" />} 
                            label="Heartbeats" 
                            value={heartbeats.toLocaleString()} 
                            desc="Pumps ~7,000 liters of blood daily"
                            color="bg-red-50 border-red-100"
                        />
                         <StatCard 
                            icon={<Activity className="text-blue-500" />} 
                            label="Breaths Taken" 
                            value={breaths.toLocaleString()} 
                            desc="Enough air to fill a blimp"
                            color="bg-blue-50 border-blue-100"
                        />
                         <StatCard 
                            icon={<Scissors className="text-amber-500" />} 
                            label="Skin Shed (kg)" 
                            value={skinShed} 
                            desc="You are literally falling apart"
                            color="bg-amber-50 border-amber-100"
                        />
                        <StatCard 
                            icon={<Droplets className="text-cyan-500" />} 
                            label="Saliva (Liters)" 
                            value={(age * 365).toLocaleString()} 
                            desc="Enough to fill ~2 bathtubs"
                            color="bg-cyan-50 border-cyan-100"
                        />
                         <StatCard 
                            icon={<Scissors className="text-slate-500" />} 
                            label="Hair Grown (meters)" 
                            value={hairGrown} 
                            desc="If you never cut it"
                            color="bg-slate-50 border-slate-100"
                        />
                        <StatCard 
                            icon={<Activity className="text-purple-500" />} 
                            label="Dreams Had" 
                            value={(age * 1460).toLocaleString()} 
                            desc="Based on avg REM cycles"
                            color="bg-purple-50 border-purple-100"
                        />
                    </div>
                 </div>
                 
                 <AdBanner slotId="8888888888" />
            </div>
        </>
    );
};

const StatCard = ({ icon, label, value, desc, color }) => (
    <div className={`p-6 rounded-2xl border flex flex-col items-center text-center ${color} transition-transform hover:scale-105`}>
        <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
            {icon}
        </div>
        <div className="text-2xl font-black text-slate-800 mb-1">{value}</div>
        <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">{label}</div>
        <div className="text-xs text-gray-400">{desc}</div>
    </div>
);

export default BioStats;

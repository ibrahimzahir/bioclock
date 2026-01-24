import { useState } from 'react';
import { Calendar, Cake, Gift, Share2 } from 'lucide-react';
import StatsGrid from './StatsGrid';
import { useAgeCalculator } from '../hooks/useAgeCalculator';
import LifeReceipt from './ViralFeatures/LifeReceipt';
import NostalgiaCard from './ViralFeatures/NostalgiaCard';
import PlanetaryAge from './ViralFeatures/PlanetaryAge';

const AgeCalculator = () => {
  const [showReceipt, setShowReceipt] = useState(false);
  const { dob, setDob, stats, nextBirthday } = useAgeCalculator('1900-03-04');

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <Cake className="text-indigo-600" /> Age Calculator
        </h2>
      </div>

      {/* Input Section */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth
        </label>
        <div className="flex gap-4">
            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="flex-1 block w-full rounded-lg border-gray-300 border px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50"
            />
            <button 
                onClick={() => setShowReceipt(true)}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
                <Share2 size={18} />
                Share
            </button>
        </div>
      </div>

      <div className="h-px bg-gray-100 my-8"></div>

      {/* Result Section */}
      {stats ? (
      <>
        <div className="text-center mb-10">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your Current Age</h3>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                {stats.years} Years, {stats.months} Months, {stats.days} Days
            </div>
            <div className="text-gray-500 font-medium">
                Born on a {stats.dayOfWeek}
            </div>
        </div>

        {/* Stats Grid */}
        <StatsGrid stats={stats} />

        <div className="h-px bg-gray-100 my-8"></div>

        {/* Next Birthday */}
        {nextBirthday && (
            <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-900 font-bold mb-2">
                    <Gift size={20} />
                    Next Birthday
                </div>
                <div className="text-xl font-bold text-slate-800 mb-4">
                    {nextBirthday.date}
                </div>
                <div className="flex justify-center gap-4">
                    <div className="bg-gray-100 px-6 py-3 rounded-xl font-semibold text-gray-700">
                        {nextBirthday.daysToGo} days to go
                    </div>
                    <div className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-semibold text-gray-700 shadow-sm">
                        Turning {nextBirthday.turningAge}
                    </div>
                </div>
            </div>
        )}

        <div className="h-px bg-gray-100 my-8"></div>

        {/* Viral Features */}
        <NostalgiaCard dob={dob} />
        <PlanetaryAge ageYears={stats.years + (stats.months/12)} />

      </>
      ) : (
          <div className="text-center text-gray-500 py-10">
              Please enter a valid date of birth.
          </div>
      )}

      {showReceipt && (
          <LifeReceipt 
            stats={stats} 
            dob={dob} 
            onClose={() => setShowReceipt(false)} 
          />
      )}

    </div>
  );
};

export default AgeCalculator;

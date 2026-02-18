import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { addDays, addSeconds, format, differenceInDays } from 'date-fns';
import { worldEvents } from '../lib/world-events';
import AdBanner from '../components/AdSense/AdBanner';

const Milestones = () => {
  const [dob, setDob] = useState('2000-01-01');

  const calculateMilestone = (amount, unit) => {
    const date = new Date(dob);
    if (unit === 'days') return addDays(date, amount);
    if (unit === 'seconds') return addSeconds(date, amount);
    return date;
  };

  const milestones = [
    { label: '10,000 Days', amount: 10000, unit: 'days' },
    { label: '20,000 Days', amount: 20000, unit: 'days' },
    { label: '1 Billion Seconds', amount: 1000000000, unit: 'seconds' },
    { label: '500,000 Hours', amount: 500000 * 3600, unit: 'seconds' },
  ];

  return (
    <>
      <Helmet>
        <title>Life Milestones Calculator - When Will You Be 10,000 Days Old?</title>
        <meta name="description" content="Calculate your major life milestones. Find out the exact date you turn 10,000 days old or 1 billion seconds old." />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Life Milestones Timeline</h1>
            
            <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Enter Date of Birth</label>
                <input 
                    type="date" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full rounded-lg border-gray-300 border px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-indigo-100">
                
                {/* Birth Year Card */}
                <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm bg-indigo-600 text-white">
                        👶
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                        <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                            THE START LINE
                        </div>
                        <div className="text-xl font-bold text-slate-900">Born in {new Date(dob).getFullYear()}</div>
                        <div className="text-slate-600 font-medium mt-1 text-sm">
                            {worldEvents[new Date(dob).getFullYear()] || "The world welcomed you."}
                        </div>
                    </div>
                </div>

                {milestones.map((m, i) => {
                    const date = calculateMilestone(m.amount, m.unit);
                    const year = date.getFullYear();
                    const isPast = new Date() > date;
                    const event = worldEvents[year];
                    
                    return (
                        <div key={i} className="relative pl-12">
                            <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${isPast ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                {i + 1}
                            </div>
                            <div className={`p-4 rounded-xl border ${isPast ? 'bg-white border-slate-200 shadow-sm' : 'bg-gray-50 border-gray-100 opacity-75'}`}>
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                                    {isPast ? 'ACHIEVED' : 'UPCOMING'}
                                </div>
                                <div className="text-xl font-bold text-slate-900">{m.label}</div>
                                <div className="text-indigo-600 font-bold mt-1 mb-2">
                                    {format(date, 'MMMM d, yyyy')}
                                </div>
                                {event && (
                                    <div className="text-sm text-slate-500 border-t border-slate-100 pt-2 mt-2">
                                        <span className="font-semibold text-slate-700">World Context:</span> {event}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        <AdBanner slotId="9876543210" />

         <section className="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
            <h2>Understanding Life Milestones</h2>
            <p>
                Most people only celebrate birthdays, but your life is full of other mathematical milestones. 
                Reaching <strong>10,000 days</strong> (around 27 years old) is a significant event. 
                One billion seconds happens shortly after your 31st birthday. Track these unique moments here.
            </p>
        </section>
      </div>
    </>
  );
};

export default Milestones;

import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { PieChart, Clock, Briefcase, Coffee, Moon } from 'lucide-react';
import AdBanner from '../components/AdSense/AdBanner';

const LifeAudit = () => {
  const [age, setAge] = useState(25);
  const [expectancy, setExpectancy] = useState(80);
  const [sleep, setSleep] = useState(8);
  const [work, setWork] = useState(8);
  const [chores, setChores] = useState(2);

  // Calculations
  const yearsLeft = expectancy - age;
  const hoursPerYear = 365.25 * 24;
  
  // Daily Allocations
  const freeHours = 24 - (sleep + work + chores);
  const freeRatio = Math.max(0, freeHours / 24);
  
  // Real Years
  const sleepYears = Math.round(yearsLeft * (sleep / 24));
  const workYears = Math.round(yearsLeft * (work / 24));
  const choreYears = Math.round(yearsLeft * (chores / 24));
  const freeYears = Math.max(0, (yearsLeft - sleepYears - workYears - choreYears).toFixed(1));

  // Pie Chart Gradient
  const total = 24;
  const pSleep = (sleep / total) * 100;
  const pWork = (work / total) * 100;
  const pChores = (chores / total) * 100;
  const pFree = (freeHours / total) * 100;

  const gradient = `conic-gradient(
    #6366f1 0% ${pFree}%, 
    #ef4444 ${pFree}% ${pFree + pWork}%, 
    #f59e0b ${pFree + pWork}% ${pFree + pWork + pChores}%, 
    #94a3b8 ${pFree + pWork + pChores}% 100%
  )`;

  return (
    <>
      <Helmet>
        <title>Life Audit - The Scary Truth About Your Free Time</title>
        <meta name="description" content="Calculate how much REAL free time you have left after sleep, work, and chores. A life changing reality check." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mb-8">
            <h1 className="text-3xl font-black text-slate-900 mb-2 text-center">The Life Audit</h1>
            <p className="text-center text-gray-500 mb-8">Subtract sleep and work. Correct for chores. See what's actually left.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                             <span>Current Age</span>
                             <span>{age} years</span>
                        </label>
                        <input type="range" min="10" max="100" value={age} onChange={e => setAge(Number(e.target.value))} className="w-full accent-indigo-600" />
                    </div>
                    
                    <div>
                         <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                             <div className="flex items-center gap-2"><Moon size={16} /> Sleep (hrs/day)</div>
                             <span>{sleep}h</span>
                        </label>
                        <input type="range" min="4" max="12" step="0.5" value={sleep} onChange={e => setSleep(Number(e.target.value))} className="w-full accent-slate-400" />
                    </div>

                    <div>
                         <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                             <div className="flex items-center gap-2"><Briefcase size={16} /> Work (hrs/day)</div>
                             <span>{work}h</span>
                        </label>
                        <input type="range" min="0" max="12" step="0.5" value={work} onChange={e => setWork(Number(e.target.value))} className="w-full accent-red-500" />
                    </div>

                    <div>
                         <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                             <div className="flex items-center gap-2"><Coffee size={16} /> Chores/Commute (hrs/day)</div>
                             <span>{chores}h</span>
                        </label>
                        <input type="range" min="0" max="6" step="0.5" value={chores} onChange={e => setChores(Number(e.target.value))} className="w-full accent-amber-500" />
                    </div>
                </div>

                {/* Results Visual */}
                <div className="flex flex-col items-center">
                    <div className="w-64 h-64 rounded-full relative shadow-inner mb-6" style={{ background: gradient }}>
                        <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center p-4 text-center">
                             <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">True Free Time</div>
                             <div className="text-5xl font-black text-indigo-600 tracking-tighter">{freeYears}</div>
                             <div className="text-gray-500 font-medium">Years Remaining</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full text-xs font-bold">
                        <div className="flex items-center gap-2 text-indigo-600"><div className="w-3 h-3 bg-indigo-600 rounded-full"></div> Free Time ({Math.round(pFree)}%)</div>
                        <div className="flex items-center gap-2 text-red-500"><div className="w-3 h-3 bg-red-500 rounded-full"></div> Work ({Math.round(pWork)}%)</div>
                        <div className="flex items-center gap-2 text-amber-500"><div className="w-3 h-3 bg-amber-500 rounded-full"></div> Chores ({Math.round(pChores)}%)</div>
                        <div className="flex items-center gap-2 text-slate-400"><div className="w-3 h-3 bg-slate-400 rounded-full"></div> Sleep ({Math.round(pSleep)}%)</div>
                    </div>
                </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mt-10">
                <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <Clock className="text-red-500" size={20} />
                    Reality Check
                </h3>
                <p className="text-red-800 leading-relaxed">
                    You might think you have {yearsLeft} years left, but you will spend <strong>{sleepYears} years sleeping</strong> and <strong>{workYears} years working</strong>. 
                    Your actual, conscious, free life is only <strong>{freeYears} years</strong>. Make them count.
                </p>
            </div>
        </div>

        <AdBanner slotId="5555555555" />

        <section className="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
            <h2>The Science of Time Budgets: 4,000 Weeks</h2>
            <p>
                The average human lifespan is roughly **4,000 weeks**. It sounds like a lot, but when you subtract the biological necessities, the number shrinks terrifyingly fast.
                This concept, popularized by philosophers and productivity experts, is the core of our **Life Audit Tool**.
            </p>
            <h3>Where Does the Time Go?</h3>
            <ul>
                <li><strong>Sleep:</strong> We spend ~26 years unconscious.</li>
                <li><strong>Work:</strong> The average person spends ~90,000 hours (10+ years) at work.</li>
                <li><strong>Logistics:</strong> Commuting, cleaning, and eating take up another ~8 years.</li>
            </ul>
            <h3>The "Free Time" Illusion</h3>
            <p>
                We often say "I'll do it when I retire" or "I'll do it on the weekend." 
                But as this calculator shows, your **True Free Time**—the hours where you have energy and autonomy—is a scarce resource.
                If you are 30 years old, you might only have **15 years** of actual, awake freedom left. 
                Using a tool like this isn't meant to scare you; it's meant to spark **Urgency**. Start that project today.
            </p>
        </section>
      </div>
    </>
  );
};

export default LifeAudit;

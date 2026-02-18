import { Heart, Flame, Calculator, Dog, MousePointer2 } from 'lucide-react';

const AnimalScience = () => {
    return (
        <section className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mt-12 mb-8">
            <div className="bg-orange-600 p-8 text-center text-white">
                <h2 className="text-3xl font-black mb-2">The Science of Aging 🧬</h2>
                <p className="opacity-90 max-w-2xl mx-auto">
                    Why do hamsters live 3 years while whales live 100? It comes down to heartbeats and metabolism.
                </p>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Heartbeat Hypothesis */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-red-500">
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">The Heartbeat Hypothesis</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        Most mammals get roughly <strong>1 billion heartbeats</strong> in a lifetime. Humans are the outliers (2.5 billion) thanks to medicine.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-red-200 pb-1">
                            <span>Hamster</span>
                            <span>450 beats/min</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-red-200 pb-1">
                            <span>Whale</span>
                            <span>20 beats/min</span>
                        </div>
                    </div>
                </div>

                {/* Metabolism & Size */}
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-amber-500">
                            <Flame size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">Metabolism & Size</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        Smaller animals usually burn energy faster, creating "free radicals" that age cells. 
                        <strong> Dogs break this rule!</strong> Small dogs live longer than large ones—a biological puzzle scientists are still solving.
                    </p>
                </div>

                {/* Calculation Methodology - Full Width */}
                <div className="md:col-span-2 bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-slate-700">
                            <Calculator size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">How We Calculate</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        The "7 year rule" is a myth. We use the latest veterinary guidelines that account for non-linear aging:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-100">
                            <div className="text-indigo-600 font-black text-lg mb-1">Year 1</div>
                            <div className="text-xs text-slate-500 uppercase font-bold">Rapid Maturity</div>
                            <p className="text-xs text-slate-600 mt-1">Equals ~15 human years.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100">
                            <div className="text-indigo-600 font-black text-lg mb-1">Adulthood</div>
                            <div className="text-xs text-slate-500 uppercase font-bold">Curve Flattens</div>
                            <p className="text-xs text-slate-600 mt-1">Aging slows down significantly.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100">
                            <div className="text-indigo-600 font-black text-lg mb-1">Senior</div>
                            <div className="text-xs text-slate-500 uppercase font-bold">Size Matters</div>
                            <p className="text-xs text-slate-600 mt-1">Aging speeds up based on breed size.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnimalScience;

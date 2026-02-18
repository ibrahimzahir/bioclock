import { Heart, Wind, Eraser, Droplets } from 'lucide-react';

const ScienceFacts = () => {
    const facts = [
        {
            icon: Heart,
            color: "text-red-500",
            bg: "bg-red-50",
            border: "border-red-100",
            title: "Heartbeats",
            highlight: "1 Billion Beats",
            text: "The average human heart beats 60-100 times per minute. By age 30, it has beaten over 1 billion times without a single battery change."
        },
        {
            icon: Wind,
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "border-blue-100",
            title: "Breaths Taken",
            highlight: "23,000 Daily",
            text: "You take about 23,000 breaths every single day. In a lifetime, you will process enough air to fill thousands of hot air balloons."
        },
        {
            icon: Eraser, // Using Eraser as a metaphor for shedding skin, or Layers if available
            color: "text-amber-500",
            bg: "bg-amber-50",
            border: "border-amber-100",
            title: "Skin Shedding",
            highlight: "35kg of Dust",
            text: "You lose 40,000 skin cells per minute. Over a lifetime, you shed nearly 35kg (77 lbs) of skin—most of which ends up under your bed."
        },
        {
            icon: Droplets,
            color: "text-cyan-500",
            bg: "bg-cyan-50",
            border: "border-cyan-100",
            title: "Saliva Production",
            highlight: "2 Swimming Pools",
            text: "You produce enough spit to fill two small swimming pools in a lifetime. Without saliva, you actually couldn't taste your food!"
        }
    ];

    return (
        <section className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-8">
            <div className="bg-slate-900 p-8 text-center">
                <h2 className="text-3xl font-black text-white mb-2">The Science Behind the Stats 🧬</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Your body is a biological machine that never stops working. 
                    Here is the massive scale of your physiology.
                </p>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {facts.map((fact, index) => (
                    <div 
                        key={index} 
                        className={`p-6 rounded-2xl border ${fact.bg} ${fact.border} transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col`}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`p-3 rounded-xl bg-white shadow-sm ${fact.color}`}>
                                <fact.icon size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 leading-tight">{fact.title}</h3>
                                <div className={`text-xs font-black uppercase tracking-wider ${fact.color}`}>
                                    {fact.highlight}
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {fact.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScienceFacts;

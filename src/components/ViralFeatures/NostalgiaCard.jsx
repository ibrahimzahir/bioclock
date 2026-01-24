import { Rocket, Music, History } from 'lucide-react';
import { getEra } from '../../utils/nostalgiaData';

const NostalgiaCard = ({ dob }) => {
    if (!dob) return null;
    const year = new Date(dob).getFullYear();
    const era = getEra(year);

    return (
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 mt-6 relative overflow-hidden">
             {/* Decorative Bg */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>

            <div className="relative z-10">
                <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <History size={20} />
                    Time Travel: {year}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Your Era</div>
                        <div className="text-lg font-bold text-slate-800">{era.name}</div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Top Song</div>
                        <div className="text-sm font-medium text-slate-800 flex items-center gap-2">
                             <Music size={14} /> {era.song}
                        </div>
                    </div>
                     <div className="col-span-1 md:col-span-2 bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Major Event</div>
                        <div className="text-sm font-medium text-slate-800">
                             {era.event}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NostalgiaCard;

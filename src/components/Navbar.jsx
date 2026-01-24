import { Link, useLocation } from 'react-router-dom';
import { Clock, Activity, Dog, Briefcase } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    
    const links = [
        { path: '/', label: 'Age Calc', icon: Clock },
        { path: '/milestones', label: 'Milestones', icon: Activity },
        { path: '/animal-age', label: 'Animal Age', icon: Dog },
        { path: '/audit', label: 'Life Audit', icon: Briefcase },
        { path: '/bio', label: 'Bio Stats', icon: Activity }, // Re-using Activity for Bio, but could import DNA if available, using Activity for now
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-black text-slate-900 tracking-tighter">
                        Life<span className="text-indigo-600">Stats</span>
                    </Link>
                    
                    <div className="flex gap-1 md:gap-2">
                        {links.map(link => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.path;
                            return (
                                <Link 
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        isActive 
                                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    <Icon size={16} />
                                    <span className="hidden md:inline">{link.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

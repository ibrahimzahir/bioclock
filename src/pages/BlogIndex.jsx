import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../lib/blog-content';
import { Clock, ArrowRight } from 'lucide-react';
import AdBanner from '../components/AdSense/AdBanner';

const BlogIndex = () => {
    return (
        <>
            <Helmet>
                <title>The Time Blog - Science of Aging & Chronobiology</title>
                <meta name="description" content="Explore the science of time, aging, and biology. Read articles on why time flies, circadian rhythms, and how to optimize your 4,000 weeks." />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">The Time Log ⏳</h1>
                    <p className="text-xl text-slate-500">Exploring the science of aging and the math of life.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {blogPosts.map(post => (
                        <Link key={post.id} to={`/blog/${post.id}`} className="group">
                            <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800">
                                        {post.readTime}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-sm text-indigo-600 font-bold mb-2">{post.date}</div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-indigo-600 font-bold text-sm">
                                        Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <AdBanner slotId="8888888888" />
            </div>
        </>
    );
};

export default BlogIndex;

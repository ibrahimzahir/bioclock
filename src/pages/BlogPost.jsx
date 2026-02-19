import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../lib/blog-content';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import AdBanner from '../components/AdSense/AdBanner';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) return <div className="text-center p-20">Post not found</div>;

    return (
        <>
            <Helmet>
                <title>{post.title} - BioClock Blog</title>
                <meta name="description" content={post.excerpt} />
                
                {/* Open Graph / Social */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={`https://bioclock.app${post.image}`} />
                <meta property="og:url" content={`https://bioclock.app/blog/${post.id}`} />

                {/* Structured Data for SEO */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": "${post.title}",
                            "image": [
                                "https://bioclock.app${post.image}"
                            ],
                            "datePublished": "${post.date}T08:00:00+08:00",
                            "dateModified": "${post.date}T09:20:00+08:00",
                            "author": [{
                                "@type": "Person",
                                "name": "BioClock Science Team",
                                "url": "https://bioclock.app/bio"
                            }]
                        }
                    `}
                </script>
            </Helmet>

            <div className="max-w-3xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Articles
                </Link>

                <article className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-64 md:h-96 object-cover"
                    />
                    
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-6 text-sm text-slate-500 mb-6 border-b border-slate-100 pb-6">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} className="text-indigo-500" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} className="text-amber-500" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div 
                            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-indigo"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </article>

                <div className="mt-12">
                     <AdBanner slotId="8888888888" />
                </div>
            </div>
        </>
    );
};

export default BlogPost;

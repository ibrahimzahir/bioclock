import AgeCalculator from '../components/AgeCalculator';
import AdBanner from '../components/AdSense/AdBanner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Age Calculator - Calculate Your Exact Age & Viral Stats</title>
        <meta name="description" content="Calculate your exact age in years, months, and days. Generate a viral Life Receipt, check your Martian age, and see what song was #1 when you were born." />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Viral Age Calculator & LifeStats" />
        <meta property="og:description" content="Discover your exact age, generate a Life Receipt, and calculate your true free time." />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "LifeStats Age Calculator",
              "url": "https://yourdomain.com/",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": "Age Calculation, Life Receipt, Time Travel, Life Audit"
            }
          `}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2 mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Your Time on Earth
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Discover your exact age, generate your personal Life Receipt, and travel through time.
            </p>
        </div>

        <AgeCalculator />

        <AdBanner slotId="1234567890" />

        {/* SEO Text Block (Crucial for AdSense) */}
        <section className="prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2>Why Precision Age Calculation Matters</h2>
            <p>
                Most people answer the question "How old are you?" with a single number. 
                But your biological journey is continuous. Our <strong>Exact Age Calculator</strong> doesn't just count years; 
                it tracks the sun's cycles to give you your age in months, weeks, days, and even hours.
            </p>
            <h3>Uses for This Calculator</h3>
            <ul>
                <li><strong>Visa & Legal Forms:</strong> Many official documents require your exact age in "Years + Months".</li>
                <li><strong>Developmental Milestones:</strong> Tracking precisely when a child hits 18 months or 1,000 days.</li>
                <li><strong>Fun & Curiosity:</strong> Finding out which day of the week you were born on (The "Monday's Child" poem).</li>
            </ul>
            
            <h2>Viral Features Explained</h2>
            <p>
                Beyond standard calculation, we offer unique visual tools:
            </p>
            <ul>
                <li><strong>Life Receipt 🧾:</strong> A generated image summary of your existence, perfect for sharing on Instagram or TikTok.</li>
                <li><strong>Planetary Age 🪐:</strong> Did you know a year on Mercury is only 88 days? You are much "older" there.</li>
                <li><strong>Nostalgia Trip 🕰️:</strong> We connect your birth year to the cultural zeitgeist—the #1 song, movie, and major events of your era.</li>
            </ul>
            
            <h3>Accuracy Guarantee</h3>
            <p>
                We use the <code>date-fns</code> library, the industry standard for time manipulation in JavaScript, ensuring leap years 
                and varying month lengths are handled with 100% precision.
            </p>
        </section>
      </div>
    </>
  );
};

export default Home;

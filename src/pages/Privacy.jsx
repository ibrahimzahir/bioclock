import { Helmet } from 'react-helmet-async';

const Privacy = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 my-8 prose prose-slate">
            <Helmet>
                <title>Privacy Policy - LifeStats</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <p>Your privacy is important to us. It is LifeStats' policy to respect your privacy regarding any information we may collect from you across our website.</p>
            
            <h3>1. Information We Collect</h3>
            <p>We do not collect any personal data. All calculations (Age, Life Audit, etc.) are performed locally on your device. We do not store your Date of Birth or share it with servers.</p>
            
            <h3>2. Advertising</h3>
            <p>We use Google AdSense to serve ads. Google may use cookies to serve ads based on your prior visits to our website or other websites.</p>
            
            <h3>3. Analytics</h3>
            <p>We may use anonymous analytics tools to track website performance (e.g., page views), but no personally identifiable information is collected.</p>
        </div>
    );
};

export default Privacy;

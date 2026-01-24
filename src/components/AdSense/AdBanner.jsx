import { useEffect, useRef } from 'react';

const AdBanner = ({ slotId, format = 'auto', style = {} }) => {
  const adRef = useRef(null);

  useEffect(() => {
    // This assumes the Adsense script is loaded in index.html
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense Error", e);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-8 overflow-hidden bg-gray-50 rounded-lg min-h-[250px] md:min-h-[90px] border border-gray-100 relative transition-all duration-300">
        <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-300 font-mono uppercase tracking-widest pointer-events-none">
            Advertisement
        </div>
        <ins className="adsbygoogle"
            style={{ display: 'block', width: '100%', ...style }}
            data-ad-client="ca-pub-7152037761387209"
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
        ></ins>
    </div>
  );
};

export default AdBanner;

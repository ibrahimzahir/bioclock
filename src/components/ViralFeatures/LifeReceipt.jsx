import { useRef } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';

const LifeReceipt = ({ stats, dob, onClose }) => {
  const receiptRef = useRef(null);

  const handleDownload = async () => {
    if (!receiptRef.current) return;
    try {
        const canvas = await html2canvas(receiptRef.current, {
            scale: 2, // High resolution
            backgroundColor: '#ffffff',
            useCORS: true, 
        });
        
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = `life-receipt-${dob}.png`;
        link.click();
    } catch (err) {
        console.error("Failed to generate receipt", err);
    }
  };

  if (!stats) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header / Actions */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 className="font-semibold text-gray-900">Your Life Receipt</h3>
            <div className="flex gap-2">
                <button 
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                    <Download size={16} /> Save
                </button>
                <button 
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                >
                    ✕
                </button>
            </div>
        </div>

        {/* Scrollable Area */}
        <div className="overflow-y-auto p-6 bg-gray-200 flex justify-center">
            
            {/* THE RECEIPT */}
            <div 
                ref={receiptRef}
                className="bg-white w-full max-w-[320px] p-6 shadow-sm font-mono text-sm relative"
                style={{
                    backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)',
                    backgroundSize: '20px 20px', // slight dot pattern texture
                    backgroundColor: '#fffcf5' // warm paper
                }}
            >
                {/* Jagged Top */}
                <div className="absolute top-0 left-0 w-full h-4 -mt-4 bg-[#fffcf5]" 
                     style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}>
                </div>

                <div className="text-center mb-6">
                    <div className="text-2xl font-black mb-1 tracking-tighter">LIFE STORE</div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest">Customer Copy</div>
                    <div className="my-2 border-b border-dashed border-gray-300"></div>
                </div>

                <div className="flex justify-between text-gray-500 text-xs mb-4">
                    <span>DATE: {new Date().toLocaleDateString()}</span>
                    <span>DOB: {dob}</span>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-end">
                        <span className="uppercase font-bold">Years</span>
                        <span className="font-mono">{stats.years}</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="uppercase font-bold">Months</span>
                         {/* We can use total months or breakdown */}
                        <span className="font-mono">{stats.totalMonths}</span>
                    </div>
                     <div className="flex justify-between items-end">
                        <span className="uppercase font-bold">Weeks</span>
                        <span className="font-mono">{stats.totalWeeks}</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="uppercase font-bold">Days</span>
                        <span className="font-mono">{stats.totalDays}</span>
                    </div>
                     <div className="flex justify-between items-end">
                        <span className="uppercase font-bold">Hours</span>
                        <span className="font-mono">{stats.totalHours}</span>
                    </div>
                </div>

                <div className="border-t border-dashed border-gray-400 my-4 pt-4">
                     <div className="flex justify-between items-end text-lg font-black">
                        <span className="uppercase">TOTAL EXPERIENCE</span>
                        <span>100%</span>
                    </div>
                </div>

                <div className="text-center mt-8 space-y-2">
                    <div className="text-xs font-bold uppercase">* Non-Refundable *</div>
                    <div className="text-[10px] text-gray-500">Thank you for existing!</div>
                    
                    {/* Viral Branding */}
                    <div className="mt-4 pt-4 border-t border-dashed border-gray-300">
                        <div className="text-lg font-black tracking-tighter">BIOCLOCK.APP</div>
                        <div className="text-[10px] text-gray-400 mb-2">Calculate Your Death Date</div>
                        {/* Barcode Mock */}
                         <div className="h-8 bg-gray-900 w-3/4 mx-auto opacity-80 mb-1"></div>
                         <div className="text-[9px] tracking-[0.5em] text-gray-400">123456789</div>
                    </div>
                </div>
                 
                 {/* Jagged Bottom */}
                 <div className="absolute bottom-0 left-0 w-full h-4 -mb-4 bg-[#fffcf5] rotate-180" 
                     style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default LifeReceipt;

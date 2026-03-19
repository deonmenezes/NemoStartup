import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 border-b-4 border-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-dots"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase leading-none">
            You want to <span className="bg-pop-yellow px-2 border-2 border-black inline-block transform -skew-x-6">scale</span> your business, but...
          </h2>
          <p className="text-xl font-bold uppercase mt-4">You are doing everything yourself.</p>
        </div>
        
        {/* Illustration Box */}
        <div className="bg-white border-3 border-black shadow-pop-lg p-3 md:p-6 transform rotate-1 max-w-3xl mx-auto">
          <div className="aspect-video w-full bg-gray-100 border-2 border-black flex items-center justify-center relative overflow-hidden">
             <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-NpcwrS34NCVdH5CBkSE9DsCV_hIo03HRtdjhusYiF8LdbaCSYgsaoDgfDbh6zUEhM5kQLuSL1dBaJ9jnQGHR0aJcob4SZDMhyDNDBT-DrfvtLvxz65gwqCBPerK2FwdqZ4YE0kVm6q1qMRjnva6UQrQqa95YVatdla9DSufcPgGl_0LS_q9xBWA1osFIGw5BDKSFn1lpjmpnTkxSCD1L4nr7TT49euQ_ur-e9A1sMsNm2Rz0WahXdubDl8h9PQ3ZAq3meYBjYsE" 
                alt="Stressed Business Owner"
                className="object-cover w-full h-full grayscale contrast-125"
             />
          </div>
          <div className="mt-6 text-center">
            <p className="font-headings font-bold text-2xl md:text-3xl uppercase">"I need 48 hours in a day!"</p>
          </div>
        </div>
      </div>
    </section>
  );
};
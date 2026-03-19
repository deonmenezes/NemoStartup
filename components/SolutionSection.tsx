import React from 'react';
import { Check } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const benefits = [
    "Oversees and aligns all specialized agents.",
    "Ensures quality assurance across all tasks.",
    "Real-time performance optimization and strategy."
  ];

  return (
    <section className="bg-pop-yellow border-b-4 border-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white border-3 border-black p-4 shadow-pop mb-8 inline-block transform -rotate-1">
              <span className="font-bold text-xl uppercase tracking-widest font-headings">The Solution</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-none text-black uppercase">
              Meet Bob:<br />Your AI CEO.
            </h2>
            
            <p className="text-2xl font-bold mb-10 text-gray-900">
              He orchestrates the entire team so you don't have to.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center bg-white border-2 border-black p-4 shadow-pop-hover transform transition-transform hover:-translate-y-1">
                  <Check className="h-8 w-8 text-black flex-shrink-0 mr-4 stroke-[3px]" />
                  <span className="text-lg md:text-xl font-bold leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Bob Image */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Offset Shadow Box */}
              <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 border-3 border-black"></div>
              
              {/* Image Container */}
              <div className="relative bg-white border-3 border-black z-10 overflow-hidden">
                 <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU3Qew14sy6xJOurnHNuZaQ8mMj64e8Cd5vdLM-lFMwyXxPqlp22qm7Ld3yAWh3a0B18uGyBsA5nu4PNJ2PcXhAaukuh0OGBRctHovF4Ts_M8p44u9lN6rD_NM0NLs0DG4EnDTwepVBRbLIVHFmsZx7mKt4gDrnC9_5ASHti_VPr1UoWq3cAowKGnBTxuMFn6HnJ8yljEQFwscubBuzOhFIMcdq74rybBgArOsytswUbPWFMs__OJ1IcP-ZLmCCgdwr3HXWIptk2k" 
                    alt="Bob AI CEO"
                    className="w-full h-auto object-cover"
                 />
              </div>
              
              {/* Speech Bubble */}
              <div className="absolute -top-6 -right-8 bg-white border-3 border-black px-6 py-4 shadow-pop z-20 rounded-[50%] hidden md:block">
                <p className="font-headings font-bold text-xl uppercase whitespace-nowrap">"I've got this!"</p>
                {/* Bubble tail hack */}
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-white border-b-2 border-l-2 border-black transform rotate-45 translate-y-2 -translate-x-1"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
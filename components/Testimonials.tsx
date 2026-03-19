import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, variant = 'yellow' }: { quote: string, author: string, role: string, variant?: 'yellow' | 'white' }) => (
  <div className={`${variant === 'yellow' ? 'bg-pop-yellow' : 'bg-white'} border-3 border-black p-8 shadow-pop relative flex flex-col h-full`}>
    {/* Quote Icon */}
    <div className="absolute -top-6 left-6 text-6xl font-headings text-black opacity-20 pointer-events-none">"</div>
    
    <div className="flex text-black mb-4 space-x-1">
       {[1, 2, 3, 4, 5].map((i) => (
         <Star key={i} fill="currentColor" size={20} strokeWidth={1} />
       ))}
    </div>
    
    <p className="font-bold text-lg mb-8 flex-grow">"{quote}"</p>
    
    <div className="flex items-center mt-auto">
      <div className="w-10 h-10 bg-black rounded-full mr-3 border-2 border-white"></div>
      <div className="flex flex-col">
          <span className="font-headings font-bold uppercase text-lg leading-none">{author}</span>
          <span className="text-xs font-bold uppercase opacity-75">{role}</span>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-white border-b-4 border-black py-16 lg:py-24 relative">
      {/* Half-tone top border overlay */}
      <div className="absolute top-0 left-0 w-full h-4 bg-dots-sm"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 uppercase leading-none">
          Employee of the month.<br /> 
          <span className="text-pop-yellow bg-black px-3 py-1 inline-block mt-2">Every Month.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="I fired my agency. Bob and the AI team handle 10x the workload for a fraction of the cost."
            author="Sarah J."
            role="Founder"
            variant="yellow"
          />
          <TestimonialCard 
            quote="My inbox used to give me anxiety. Now 'Alice' (my AI admin) clears it before I wake up."
            author="Mike T."
            role="CEO"
            variant="white"
          />
          <TestimonialCard 
            quote="The best hire I never made. Setup was instant and the results were immediate."
            author="Jessica R."
            role="Director"
            variant="yellow"
          />
        </div>
      </div>
    </section>
  );
};
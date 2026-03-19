import React from 'react';
import { Button } from './Button';
import { StarRating } from './ui/StarRating';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b-4 border-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-none tracking-tight">
          AI EMPLOYEES TO<br />
          <span
            className="bg-pop-yellow border-black border-2 px-2 shadow-[4px_4px_0px_black] inline-block mt-2 transform"
            style={{ transform: 'skew(-5deg) rotate(-1deg)' }}
          >
            SCALE YOUR BUSINESS
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-gray-900 font-bold leading-tight">
          Get an AI Team who run your inbox, socials, SEO, lead generation, calls, and support—24/7 without coffee breaks.
        </p>

        <div className="mt-12 flex justify-center">
          <Button size="lg" href="/get-started">Get Started Now</Button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center">
          <StarRating count={5} size={28} className="text-2xl mb-2" />
          <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">
            Trusted by <span className="bg-black text-white px-1">50,000+</span> happy businesses
          </p>
        </div>
      </div>
    </section>
  );
};
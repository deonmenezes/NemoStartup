import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, description, imgSrc }) => (
  <div className="bg-white border-3 border-black shadow-pop p-6 flex flex-col items-center hover:shadow-pop-lg transition-all transform hover:-translate-y-1 group h-full">
    <div className="h-32 w-32 bg-gray-200 rounded-full border-3 border-black mb-4 overflow-hidden relative">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-full object-cover animate-float"
      />
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none transform translate-x-full group-hover:translate-x-0"></div>
    </div>

    <h3 className="text-3xl font-bold text-center mb-1 uppercase font-headings leading-none">{name}</h3>

    <div className="bg-pop-yellow px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 mb-4 mt-1">
      <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-black">{role}</span>
    </div>

    <div className="w-full h-1 bg-gray-200 mb-4 border-t-2 border-black border-dashed"></div>
    <p className="text-center font-semibold text-gray-800 leading-snug">{description}</p>
  </div>
);

export const TeamGrid: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: "Amy",
      role: "HR Specialist",
      description: "Manages onboarding, payroll inquiries, and team culture without the paperwork.",
      imgSrc: "/avatars/amy.png"
    },
    {
      name: "Caroline",
      role: "Sales Lead",
      description: "Prospects leads, books meetings, and follows up relentlessly 24/7.",
      imgSrc: "/avatars/caroline.png"
    },
    {
      name: "Harsh",
      role: "Developer",
      description: "Builds scalable architecture and turns caffeine into error-free code.",
      imgSrc: "/avatars/harsh.png"
    },
    {
      name: "Christopher",
      role: "CyberSec / Pentester",
      description: "Monitors threats, secures data endpoints, and ensures compliance.",
      imgSrc: "/avatars/christopher.png"
    },
    {
      name: "Sean",
      role: "AI Engineer",
      description: "Builds custom workflows and integrates new tools into your stack.",
      imgSrc: "/avatars/sean.png"
    },
    {
      name: "Xavier",
      role: "Data Analyst",
      description: "Turns raw numbers into actionable growth strategies every morning.",
      imgSrc: "/avatars/xavier.png"
    },
    {
      name: "Walter",
      role: "Finance",
      description: "Optimizes cash flow, manages budgets, and forecasts financial growth.",
      imgSrc: "/avatars/walter.png"
    },
    {
      name: "Specter",
      role: "Legal Advisor",
      description: "Handles contracts, compliance, and regulatory requirements automatically.",
      imgSrc: "/avatars/specter.png"
    }
  ];

  return (
    <section className="bg-pop-yellow border-b-4 border-black py-16 lg:py-24">
      <style>{`
        @keyframes float {
          0%, 100% { transform: scale(1.0) translateY(0); }
          50% { transform: scale(1.05) translateY(-2px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        /* Stagger animations for a more organic feel */
        .group:nth-child(2n) .animate-float { animation-delay: 1s; }
        .group:nth-child(3n) .animate-float { animation-delay: 2s; }
        .group:nth-child(4n) .animate-float { animation-delay: 0.5s; }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-white inline-block px-6 py-3 border-3 border-black shadow-pop uppercase leading-none transform rotate-1">
            Stop Juggling. Meet Your Team.
          </h2>
          <p className="text-xl md:text-2xl font-bold mt-8 max-w-3xl mx-auto">
            Why hire one person when you can have a whole department?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {members.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
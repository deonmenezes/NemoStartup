import React from 'react';
import { Hero } from '../Hero';
import { ProblemSection } from '../ProblemSection';
import { SolutionSection } from '../SolutionSection';
import { TeamGrid } from '../TeamGrid';
import { DemoSection } from '../DemoSection';
import { Testimonials } from '../Testimonials';

export const LandingPage: React.FC = () => {
	return (
		<>
			<Hero />
			<ProblemSection />
			<SolutionSection />
			<TeamGrid />
			<DemoSection />
			<Testimonials />
		</>
	);
};

import React from 'react';
import { Play, CheckCircle } from 'lucide-react';
import { Button } from '../Button';

const demoFeatures = [
	{
		title: "Email Management",
		description: "Watch your AI team handle inbox overflow effortlessly",
		videoId: "email-demo"
	},
	{
		title: "Social Media",
		description: "See how AI creates and schedules engaging content",
		videoId: "social-demo"
	},
	{
		title: "Customer Support",
		description: "Experience 24/7 intelligent customer interactions",
		videoId: "support-demo"
	},
	{
		title: "Lead Generation",
		description: "Discover how AI qualifies and nurtures leads",
		videoId: "leads-demo"
	},
	{
		title: "SEO Optimization",
		description: "Watch AI improve your search rankings automatically",
		videoId: "seo-demo"
	},
	{
		title: "Analytics Dashboard",
		description: "See real-time insights and performance metrics",
		videoId: "analytics-demo"
	}
];

export const DemoPage: React.FC = () => {
	const [activeDemo, setActiveDemo] = React.useState<string | null>(null);

	const handlePlayDemo = (videoId: string) => {
		setActiveDemo(videoId);
		// In a real app, this would open a video modal or navigate to the demo
		console.log(`Playing demo: ${videoId}`);
	};

	return (
		<section className="bg-white py-16 lg:py-24 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="bg-pop-yellow border-3 border-black p-4 shadow-pop mb-8 inline-block transform -rotate-1">
						<span className="font-bold text-xl uppercase tracking-widest font-headings">Interactive Demos</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase leading-none">
						See Your AI Team<br />
						<span
							className="bg-pop-yellow border-black border-2 px-2 shadow-[4px_4px_0px_black] inline-block mt-2"
							style={{ transform: 'skew(-5deg) rotate(-1deg)' }}
						>
							In Action
						</span>
					</h1>
					<p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto text-gray-900">
						Click through our interactive demos to experience what your AI team can accomplish
					</p>
				</div>

				{/* Demo Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{demoFeatures.map((demo) => (
						<div
							key={demo.videoId}
							className="bg-white border-3 border-black shadow-pop hover:shadow-pop-hover transition-all hover:translate-x-[2px] hover:translate-y-[2px] overflow-hidden"
						>
							{/* Video Placeholder */}
							<div
								className="aspect-video bg-gray-200 flex items-center justify-center group cursor-pointer hover:bg-gray-300 transition-colors relative"
								onClick={() => handlePlayDemo(demo.videoId)}
							>
								{activeDemo === demo.videoId ? (
									<div className="absolute inset-0 flex items-center justify-center bg-black/80">
										<div className="text-white text-center">
											<CheckCircle className="mx-auto mb-2" size={48} />
											<p className="font-bold">Demo Playing...</p>
										</div>
									</div>
								) : (
									<div className="w-16 h-16 bg-pop-yellow rounded-full flex items-center justify-center border-2 border-black shadow-sm group-hover:scale-110 transition-transform">
										<Play className="ml-1 text-black fill-current" size={32} />
									</div>
								)}
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="font-headings text-2xl font-bold uppercase mb-2">
									{demo.title}
								</h3>
								<p className="text-gray-700 font-semibold">
									{demo.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center bg-pop-yellow border-3 border-black p-8 md:p-12 shadow-pop">
					<h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
						Ready to Get Started?
					</h2>
					<p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
						Join 50,000+ businesses already scaling with AI employees
					</p>
					<Button size="lg" variant="dark" href="/get-started">
						Start Your Free Trial
					</Button>
				</div>
			</div>
		</section>
	);
};

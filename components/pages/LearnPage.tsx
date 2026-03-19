import React from 'react';
import { BookOpen, Video, FileText, Users, ArrowRight } from 'lucide-react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

const resources = [
	{
		icon: BookOpen,
		title: "Getting Started Guide",
		description: "Learn the basics of setting up your AI team in minutes",
		link: "#",
		type: "Guide"
	},
	{
		icon: Video,
		title: "Video Tutorials",
		description: "Step-by-step walkthroughs for every feature",
		link: "#",
		type: "Videos"
	},
	{
		icon: FileText,
		title: "Documentation",
		description: "Complete technical documentation and API reference",
		link: "#",
		type: "Docs"
	},
	{
		icon: Users,
		title: "Community Forum",
		description: "Connect with other users and share best practices",
		link: "#",
		type: "Community"
	}
];

const blogPosts = [
	{
		title: "10 Ways AI Employees Can Transform Your Business",
		excerpt: "Discover how businesses are leveraging AI to scale faster than ever before.",
		date: "Feb 1, 2024",
		readTime: "5 min read"
	},
	{
		title: "The Future of Customer Support: AI + Human Collaboration",
		excerpt: "Learn how the best companies are combining AI efficiency with human empathy.",
		date: "Jan 28, 2024",
		readTime: "7 min read"
	},
	{
		title: "Case Study: How Startup X 10x'd Their Revenue",
		excerpt: "A deep dive into how one company used Nemo to achieve explosive growth.",
		date: "Jan 20, 2024",
		readTime: "10 min read"
	}
];

export const LearnPage: React.FC = () => {
	return (
		<section className="bg-white py-16 lg:py-24 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="bg-pop-yellow border-3 border-black p-4 shadow-pop mb-8 inline-block transform -rotate-1">
						<span className="font-bold text-xl uppercase tracking-widest font-headings">Learn & Grow</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase leading-none">
						Master Your<br />
						<span
							className="bg-pop-yellow border-black border-2 px-2 shadow-[4px_4px_0px_black] inline-block mt-2"
							style={{ transform: 'skew(-5deg) rotate(-1deg)' }}
						>
							AI Team
						</span>
					</h1>
					<p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto text-gray-900">
						Everything you need to get the most out of your AI employees
					</p>
				</div>

				{/* Resources Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
					{resources.map((resource) => {
						const Icon = resource.icon;
						return (
							<a
								key={resource.title}
								href={resource.link}
								className="group bg-white border-3 border-black shadow-pop p-8 hover:shadow-pop-hover transition-all hover:translate-x-[2px] hover:translate-y-[2px] flex gap-6"
							>
								<div className="bg-pop-yellow border-3 border-black p-4 h-fit">
									<Icon size={32} strokeWidth={2.5} />
								</div>
								<div className="flex-1">
									<span className="text-sm font-bold uppercase text-gray-500 mb-1 block">{resource.type}</span>
									<h3 className="font-headings text-2xl font-bold uppercase mb-2 group-hover:underline">
										{resource.title}
									</h3>
									<p className="text-gray-700 font-semibold">
										{resource.description}
									</p>
								</div>
								<ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity self-center" size={24} />
							</a>
						);
					})}
				</div>

				{/* Blog Section */}
				<div className="mb-16">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-4xl md:text-5xl font-bold uppercase">Latest Articles</h2>
						<Link to="#" className="font-bold text-lg hover:underline uppercase flex items-center gap-2">
							View All <ArrowRight size={20} />
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<article
								key={post.title}
								className="bg-white border-3 border-black shadow-pop hover:shadow-pop-hover transition-all hover:translate-x-[2px] hover:translate-y-[2px] overflow-hidden group"
							>
								{/* Image Placeholder */}
								<div className="aspect-video bg-gray-200 border-b-3 border-black" />

								<div className="p-6">
									<div className="flex items-center gap-3 text-sm font-semibold text-gray-600 mb-3">
										<span>{post.date}</span>
										<span>•</span>
										<span>{post.readTime}</span>
									</div>
									<h3 className="font-headings text-xl font-bold uppercase mb-2 group-hover:underline">
										{post.title}
									</h3>
									<p className="text-gray-700 font-semibold">
										{post.excerpt}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>

				{/* Newsletter CTA */}
				<div className="bg-pop-yellow border-3 border-black p-8 md:p-12 shadow-pop">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
							Stay Updated
						</h2>
						<p className="text-xl font-bold mb-8">
							Get the latest tips, guides, and AI automation insights delivered to your inbox
						</p>
						<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-black font-semibold"
							/>
							<Button type="submit" variant="dark">
								Subscribe
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

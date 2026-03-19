import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const CONTACT_EMAIL = 'hello@Nemocompany.com';

export const ChatWidget: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [sent, setSent] = useState(false);
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const handleSend = (e: React.FormEvent) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Message from ${form.name}`);
		const body = encodeURIComponent(
			`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
		);
		window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self');
		setSent(true);
	};

	const handleClose = () => {
		setIsOpen(false);
		if (sent) {
			setSent(false);
			setForm({ name: '', email: '', message: '' });
		}
	};

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{/* Chat Panel */}
			{isOpen && (
				<div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white border-3 border-black shadow-pop-lg animate-[slideUp_0.2s_ease-out]">
					{/* Header */}
					<div className="bg-black text-white p-4 flex items-center justify-between">
						<div>
							<h3 className="font-headings text-lg font-bold uppercase">Chat With Us</h3>
							<p className="text-sm opacity-80">We typically reply within a few hours</p>
						</div>
						<button onClick={handleClose} className="hover:opacity-70 transition-opacity">
							<X size={20} strokeWidth={3} />
						</button>
					</div>

					{/* Body */}
					<div className="p-4">
						{sent ? (
							<div className="text-center py-8">
								<div className="w-16 h-16 bg-pop-yellow border-3 border-black rounded-full flex items-center justify-center mx-auto mb-4">
									<Send size={28} strokeWidth={2.5} />
								</div>
								<h4 className="font-headings text-2xl font-bold uppercase mb-2">Message Sent!</h4>
								<p className="font-semibold text-gray-700 mb-4">
									Your email app should have opened with your message. Hit send and we'll get back to you soon!
								</p>
								<button
									onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
									className="font-bold uppercase text-sm border-2 border-black px-4 py-2 hover:bg-pop-yellow transition-colors"
								>
									Send Another
								</button>
							</div>
						) : (
							<form onSubmit={handleSend} className="space-y-3">
								<div>
									<input
										type="text"
										required
										value={form.name}
										onChange={(e) => setForm({ ...form, name: e.target.value })}
										placeholder="Your name"
										className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold text-sm"
									/>
								</div>
								<div>
									<input
										type="email"
										required
										value={form.email}
										onChange={(e) => setForm({ ...form, email: e.target.value })}
										placeholder="Your email"
										className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold text-sm"
									/>
								</div>
								<div>
									<textarea
										required
										rows={4}
										value={form.message}
										onChange={(e) => setForm({ ...form, message: e.target.value })}
										placeholder="How can we help?"
										className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold text-sm resize-none"
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-pop-yellow border-3 border-black py-3 font-headings font-bold uppercase text-lg shadow-pop hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pop-hover transition-all flex items-center justify-center gap-2"
								>
									<Send size={18} strokeWidth={2.5} />
									Send Message
								</button>
							</form>
						)}
					</div>
				</div>
			)}

			{/* Floating Button */}
			<button
				onClick={() => isOpen ? handleClose() : setIsOpen(true)}
				className={`w-16 h-16 rounded-full border-3 border-black shadow-pop flex items-center justify-center transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pop-hover ${
					isOpen ? 'bg-black text-white' : 'bg-pop-yellow text-black'
				}`}
				aria-label={isOpen ? 'Close chat' : 'Chat with us'}
			>
				{isOpen ? (
					<X size={28} strokeWidth={3} />
				) : (
					<MessageCircle size={28} strokeWidth={2.5} />
				)}
			</button>
		</div>
	);
};

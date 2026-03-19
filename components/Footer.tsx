import React from 'react';
import { Logo } from './ui/Logo';
import { SocialLinks } from './ui/SocialLinks';
import { FooterLinks } from './sections/FooterLinks';
import { CTABanner } from './sections/CTABanner';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pop-yellow pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="border-b-4 border-black pb-12 mb-12">
          <CTABanner
            title={
              <>
                If you are reading this,<br />
                <span className="bg-white border-black border-2 px-3 shadow-[4px_4px_0px_black] inline-block transform rotate-1 mt-4 py-1">
                  You are already ahead.
                </span>
              </>
            }
            buttonText="Start Scaling Now"
            buttonLink="/get-started"
          />
        </div>

        {/* Links Grid */}
        <FooterLinks className="mb-12" />

        {/* Bottom Bar */}
        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center">
          <Logo size="md" showText={true} />
          <div className="text-sm font-bold my-4 md:my-0">
            © {new Date().getFullYear()} Nemo Company Inc. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
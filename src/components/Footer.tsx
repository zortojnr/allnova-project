import TwitterIcon from './icons/TwitterIcon'
import FacebookIcon from './icons/FacebookIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import InstagramIcon from './icons/InstagramIcon'
import YouTubeIcon from './icons/YouTubeIcon'
import TikTokIcon from './icons/TikTokIcon'

const footerLinks = {
  categories: [
    'Graphic Design', 'UI/UX Design', 'Web Development', 'Mobile App Development',
    'Programming and Tech', 'Video Editing', 'Animation', 'Social Media Design',
    'Social Media Management', 'Presentation Design', 'Illustration and Digital Art'
  ],
  explore: [
    'How it works', 'Help and Support', 'Articles', 'Community', 'FAQs', 'Marketplace'
  ],
  freelancers: [
    'Join as a freelancer', 'Find Jobs', 'Freelancing Tips', 'Community Forums', 'Success Stories'
  ],
  company: [
    'About Allnova', 'Contact Us', 'Privacy Policy', 'Terms of Service'
  ],
  clients: [
    'Hire Freelancers', 'Shared Platform', 'Post a job'
  ]
}

export default function Footer() {
  return (
    <footer className="px-4 md:px-10 lg:px-16 xl:px-[120px] 2xl:px-[200px] py-12 md:py-16">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Categories */}
          <div className="flex w-full lg:w-[258px] flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Categories
            </h4>
            <div className="flex flex-col gap-6">
              {footerLinks.categories.map((link) => (
                <a key={link} href="#" className="text-body-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Explore */}
          <div className="flex w-full lg:w-[258px] flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore
            </h4>
            <div className="flex flex-col gap-6">
              {footerLinks.explore.map((link) => (
                <a key={link} href="#" className="text-body-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* For Freelancers */}
          <div className="flex w-full lg:w-[258px] flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
              For Freelancers
            </h4>
            <div className="flex flex-col gap-6">
              {footerLinks.freelancers.map((link) => (
                <a key={link} href="#" className="text-body-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Company */}
          <div className="flex w-full lg:w-[258px] flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Company
            </h4>
            <div className="flex flex-col gap-6">
              {footerLinks.company.map((link) => (
                <a key={link} href="#" className="text-body-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* For Clients */}
          <div className="flex w-[258px] flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
              For Clients
            </h4>
            <div className="flex flex-col gap-6">
              {footerLinks.clients.map((link) => (
                <a key={link} href="#" className="text-body-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-20">
          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4">
            <TwitterIcon className="h-[17px] w-[21px] text-[#4d5761]" />
            <FacebookIcon className="h-5 w-5 text-[#4d5761]" />
            <LinkedInIcon className="h-[17px] w-5 text-[#4d5761]" />
            <InstagramIcon className="h-[18px] w-[18px] text-[#4d5761]" />
            <YouTubeIcon className="h-[11px] w-4 text-[#4d5761]" />
            <TikTokIcon className="h-[18px] w-[18px] text-[#4d5761]" />
          </div>
          
          {/* Copyright */}
          <p className="text-[14px] font-normal text-[#98a2b3]" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2024 Allnovas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
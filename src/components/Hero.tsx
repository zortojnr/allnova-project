import { Input } from '@/components/ui/input'
import SearchIcon from './icons/SearchIcon'

export default function Hero() {
  return (
    <section className="relative px-[200px] pb-[120px] pt-[24px]">
      {/* Decorative SVG */}
      <img 
        src="/images/hero-decoration.svg" 
        alt="" 
        className="absolute left-[210px] top-[238px] h-[163px] w-[1308px]"
      />
      
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-center text-body-semibold text-primary">
            Designed for modern collaboration
          </p>
          
          <div className="flex flex-col gap-5">
            <h1 className="heading-hero text-center">
              Co-Creating Your Vision,{' '}
              <span className="text-[#f05658]">One Step at a Time</span>
            </h1>
            <p className="text-body-lg mx-auto max-w-[684px] text-center">
              From concept to final deliverables , we build with transparency at every stage, keeping you inspired throughout the journey
            </p>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mx-auto flex w-[493px] items-center gap-4 rounded-[40px] bg-[#f3f4f6] px-5 py-4">
          <Input 
            placeholder="What are you looking for?" 
            className="border-0 bg-transparent text-sm placeholder:text-[#4d5761] focus-visible:ring-0"
          />
          <SearchIcon className="h-5 w-5 flex-shrink-0 text-[#4d5761]" />
        </div>
        
        {/* Popular Search Tags */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[18px] font-normal text-[#4d5761]">Popular Search:</span>
          <div className="flex flex-wrap items-center gap-6">
            {['Graphic Design', 'Web Development', 'Programming', 'UI/UX Design', 'Presentation Design', 'Video Editing'].map((tag) => (
              <span key={tag} className="text-sm text-[#4d5761]">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
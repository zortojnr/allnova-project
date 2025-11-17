import { Button } from '@/components/ui/button'
import CommunityDecorIcon from './icons/CommunityDecorIcon'
import PathDecorIcon from './icons/PathDecorIcon'

export default function Community() {
  return (
    <section className="relative px-[200px] py-16">
      {/* Decorative Icons */}
      <CommunityDecorIcon className="absolute left-[736px] top-[120px] h-16 w-[105px] text-[#f05658]" />
      <PathDecorIcon className="absolute right-[128px] top-0 h-[299px] w-[281px]" style={{ border: '20px solid rgba(70, 0, 80, 0.11)' }} />
      
      <div className="flex gap-20">
        {/* Content */}
        <div className="flex flex-col gap-3">
          <h2 className="text-body-semibold text-primary">Tribe</h2>
          
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h3 className="heading-xl max-w-[593px]">
                  Unlock Your Full Potential Using Our Community
                </h3>
                <p className="text-body-lg max-w-[593px]">
                  Where talents connect, collaborate and grow together. Find your space to learn, connect and grow
                </p>
              </div>
              <Button className="w-fit bg-[#f05658] text-body-medium text-white hover:bg-[#d04446]">
                Join Community
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-4">
              <img 
                src="/images/user-avatars.svg" 
                alt="Users"
                className="h-12 w-[156px]"
              />
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[20px] font-semibold leading-6 tracking-[-0.80px] text-[#0f0f0f]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    ---M+
                  </p>
                  <p className="text-[18px] font-normal text-[#4d5761]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Active users
                  </p>
                </div>
                <div className="h-[55px] w-px bg-[#d9d9d9]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[20px] font-semibold leading-6 tracking-[-0.80px] text-[#0f0f0f]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    ---+
                  </p>
                  <p className="text-[18px] font-normal text-[#4d5761]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <img 
          src="/images/community-image.jpg" 
          alt="Community"
          className="h-[440px] w-[655px] rounded-[20px_20px_0px_20px] object-cover"
        />
      </div>
    </section>
  )
}
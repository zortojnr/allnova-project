import { Button } from '@/components/ui/button'
import TeacherIcon from './icons/TeacherIcon'
import PeopleIcon from './icons/PeopleIcon'
import BookIcon from './icons/BookIcon'
import LampIcon from './icons/LampIcon'
import SmallArrowIcon from './icons/SmallArrowIcon'

const resources = [
  {
    icon: TeacherIcon,
    title: 'Tutorials by Experts:',
    description: 'Master new techniques with step-by-step guides created by industry leaders.'
  },
  {
    icon: PeopleIcon,
    title: 'Interactive Webinars:',
    description: 'Learn directly from the pros in live sessions, complete with Q&A.'
  },
  {
    icon: BookIcon,
    title: 'eBooks and Templates:',
    description: 'Access downloadable guides and templates to speed up your projects.'
  },
  {
    icon: LampIcon,
    title: 'Tips and Trends:',
    description: 'Stay ahead with insights into cutting-edge design trends.'
  }
]

export default function Resources() {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-[120px] 2xl:px-[200px] py-12 md:py-16">
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-5">
          <h2 className="heading-lg mx-auto max-w-[1328px] text-center">
            Grow Your Skills With Free Resources From Allnovas
          </h2>
          <p className="text-body-lg mx-auto max-w-[1328px] text-center">
            Positioning tech experts to grow with carefully curated tutorials, templates and ebooks
          </p>
        </div>
        
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Image */}
          <img 
            src="/images/resources-image.jpg" 
            alt="Resources"
            className="h-[300px] sm:h-[380px] lg:h-[466px] w-full lg:w-[655px] rounded-[20px_20px_0px_20px] object-cover"
          />
          
          {/* Resources List */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon
                return (
                  <div key={index} className="flex gap-4">
                    <Icon className="h-5 w-5 flex-shrink-0 text-[#0f0f0f]" />
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[20px] font-semibold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {resource.title}
                      </h4>
                      <p className="text-[16px] font-medium leading-[22.40px] text-[#6c727e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {resource.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button className="flex items-center gap-2 rounded-xl bg-[#f05658] px-6 py-3 text-white hover:bg-[#d04446]">
                <SmallArrowIcon className="h-3 w-4" />
                <span className="text-body-medium">Explore Free Resources</span>
              </Button>
              <button className="text-body-medium text-[#f05658]">
                Register for free Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
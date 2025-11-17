import DecorArrowIcon from './icons/DecorArrowIcon'
import BrowseIcon from './icons/BrowseIcon'

export default function Templates() {
  return (
    <section className="bg-gradient-dark relative px-4 md:px-10 lg:px-16 xl:px-[120px] 2xl:px-[200px] py-16 lg:py-20">
      {/* Decorative Arrow */}
      <DecorArrowIcon className="hidden lg:block absolute right-[415px] top-[170px] h-[99px] w-[38px] text-[#f05658]" />
      
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5">
          <h2 className="heading-lg mx-auto max-w-[860px] text-center text-white">
            Build Templates. Download Free. Grow Together
          </h2>
          <p className="text-body-lg mx-auto max-w-[860px] text-center text-[#fffdfd]">
            Upload your designs or download free resources.
          </p>
        </div>
        
        {/* Template Grid */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Main Template */}
          <img 
            src="/images/template-main.jpg" 
            alt="Template"
            className="h-[250px] sm:h-[320px] lg:h-[425px] w-full lg:w-[527px] rounded-[10px_0px_10px_0px] object-cover"
          />
          
          {/* Template Grid */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <img 
                src="/images/template-1.jpg" 
                alt="Template"
                className="h-[183px] w-[318px] rounded-[10px_0px_10px_0px] object-cover"
              />
              <img 
                src="/images/template-2.jpg" 
                alt="Template"
                className="h-[183px] w-[318px] rounded-[10px_0px_10px_0px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img 
                src="/images/template-3.jpg" 
                alt="Template"
                className="h-[183px] w-[318px] rounded-[10px_0px_10px_0px] object-cover"
              />
              <img 
                src="/images/template-4.jpg" 
                alt="Template"
                className="h-[183px] w-[318px] rounded-[10px_0px_10px_0px] object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Browse Button */}
        <div className="flex items-center justify-center gap-2">
          <BrowseIcon className="h-2.5 w-5 text-[#f05658]" />
          <button className="text-body-medium text-white">Browse Template</button>
        </div>
      </div>
    </section>
  )
}
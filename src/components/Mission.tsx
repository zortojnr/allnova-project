import { Button } from '@/components/ui/button'
import AccessibilityIcon from './icons/AccessibilityIcon'
import FunctionalityIcon from './icons/FunctionalityIcon'
import SecurityIcon from './icons/SecurityIcon'
import ArrowRightIcon from './icons/ArrowRightIcon'

export default function Mission() {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-[120px] 2xl:px-[200px] py-12 md:py-16">
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Mission Header */}
        <div className="flex flex-col gap-5">
          <h2 className="text-body-semibold text-center text-primary">Our Mission</h2>
          <div className="flex flex-col gap-5">
            <h3 className="heading-xl text-center">
              Building A Trusted Ecosystem Where Talents Thrive And Opportunities Grow
            </h3>
            <p className="text-body-lg text-center">
              Secured payments, verified talents and transparent projects
            </p>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Accessibility Card */}
          <div className="bg-gradient-blue flex h-[420px] md:h-[500px] w-full lg:w-[318px] flex-col items-center justify-end rounded-[0px_36px_0px_36px] p-8">
            <div className="flex flex-col items-center gap-8">
              <div className="flex h-[73px] w-[73px] items-center justify-center rounded-full bg-[rgba(115,168,230,0.67)]">
                <AccessibilityIcon className="h-[67px] w-[67px]" />
              </div>
              <h4 className="heading-feature text-center">Accesibility</h4>
            </div>
          </div>
          
          {/* Functionality Card */}
          <div className="bg-gradient-purple flex h-[420px] md:h-[500px] w-full lg:w-[650px] flex-col items-center justify-between rounded-[0px_36px_0px_36px] p-8">
            <div className="flex flex-col items-center gap-8 pt-4">
              <div className="flex h-[73px] w-[71px] items-center justify-center rounded-full bg-[rgba(210,147,219,0.73)]">
                <FunctionalityIcon className="h-[73px] w-[71px]" />
              </div>
              <div className="flex flex-col gap-4 text-center">
                <h4 className="heading-feature">Functionality</h4>
                <p className="text-[16px] font-semibold leading-[23.20px] text-[#f7faff]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Connect, create and earn with tools that make freelancing seamless.
                </p>
              </div>
            </div>
            <Button className="flex items-center gap-2 rounded-[22px] bg-[#400049] px-6 py-3 text-white hover:bg-[#5a0066]">
              <span className="text-body-medium">Get Started</span>
              <ArrowRightIcon className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Security Card */}
          <div className="bg-gradient-green flex h-[420px] md:h-[500px] w-full lg:w-[318px] flex-col items-center justify-end rounded-[0px_36px_0px_36px] p-8">
            <div className="flex flex-col items-center gap-8">
              <div className="flex h-[68px] w-[60px] items-center justify-center rounded-full bg-[rgba(177,240,170,0.52)]">
                <SecurityIcon className="h-[68px] w-[60px]" />
              </div>
              <h4 className="heading-feature text-center">Security</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
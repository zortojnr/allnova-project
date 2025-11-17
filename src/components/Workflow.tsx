const features = [
  {
    number: '1',
    title: 'Verified Freelancers',
    description: 'Every talent is vetted and reviewd for quality assurance'
  },
  {
    number: '2',
    title: 'Smart Matching',
    description: 'Instantly connect with freelancers tailored to your needs'
  },
  {
    number: '3',
    title: 'Secure Payments',
    description: 'Only release funds when milestones are met'
  }
]

export default function Workflow() {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-[120px] 2xl:px-[200px] py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Image */}
        <img 
          src="/images/workflow-image.jpg" 
          alt="Workflow"
          className="h-[280px] sm:h-[360px] lg:h-[410px] w-full lg:w-[655px] rounded-[10px] object-cover"
        />
        
        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h3 className="heading-xl max-w-[593px]">
              Elevate Your Workflow with Allnovas.
            </h3>
            <p className="text-body-lg max-w-[593px]">
              Here's how Allnovas can help you do what you do
            </p>
          </div>
          
          {/* Features List */}
          <div className="flex flex-col gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <span 
                  className="text-[16px] font-semibold leading-[23.20px] text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.number}
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] font-semibold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {feature.title}
                  </h4>
                  <p className="text-body max-w-[557px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
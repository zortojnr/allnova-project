export default function HowItWorks() {
  return (
    <section className="px-[200px] py-16">
      <div className="flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-5">
          <h2 className="heading-lg mx-auto max-w-[1328px] text-center">
            How AllNova Works
          </h2>
          <p className="text-body-lg mx-auto max-w-[790px] text-center">
            Your Path to Success: From Choosing the Perfect Freelancer to Seamless Deliveries at Your Virtual Doorstep!
          </p>
        </div>
        
        {/* Video Thumbnail */}
        <div className="mx-auto h-[582px] w-[1328px] overflow-hidden rounded-lg">
          <img 
            src="/images/video-thumbnail.svg" 
            alt="How AllNova Works"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
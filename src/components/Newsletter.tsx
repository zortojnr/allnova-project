import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Newsletter() {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-[120px] 2xl:px-[200px] py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
        {/* Label */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-bold text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Become the smartest person in the room.
          </h3>
          <p className="text-[18px] font-normal leading-[27px] text-[#4b4b4b]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Subscribe for practical insights and proven strategies straight to your inbox
          </p>
        </div>
        
        {/* Input */}
        <div className="flex w-full md:w-auto gap-3.5">
          <div className="flex w-full md:w-[300px] items-center rounded-lg border border-[#d2d6db] px-4 py-3">
            <Input 
              type="email"
              placeholder="Enter email" 
              className="border-0 p-0 text-sm text-[#6c727e] placeholder:text-[#6c727e] focus-visible:ring-0"
            />
          </div>
          <Button className="bg-[#f05658] text-body-medium text-white hover:bg-[#d04446]">
            Unlock Insights
          </Button>
        </div>
      </div>
    </section>
  )
}
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="px-[200px] py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img 
          src="/images/allnova-logo.png" 
          alt="AllNova" 
          className="h-[42px] w-[145px] object-contain"
        />
        
        {/* Navigation */}
        <nav className="flex items-center gap-4 rounded-[100px] bg-[rgba(243,244,246,0.10)] px-[52px] py-[13px]">
          <a href="#" className="text-body-semibold">Find Freelancers</a>
          <a href="#" className="text-body-semibold">Services</a>
          <a href="#" className="text-body-semibold">Resources</a>
          <a href="#" className="text-body-semibold">About Us</a>
          <a href="#" className="text-body-semibold">Offshore Services</a>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-body-medium text-[#f05658]">Sign in</button>
          <Button className="group bg-[#f05658] text-body-medium text-white hover:bg-[#d04446]">
            <span className="group-hover:hidden">Join</span>
            <span className="hidden group-hover:inline">Join +</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
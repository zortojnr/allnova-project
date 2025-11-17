import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import FAQDecorIcon from './icons/FAQDecorIcon'

const tabs = ['General', 'Freelancing', 'Account', 'Transfer']

const faqs = [
  'What is Allnovas about?',
  'Who can use Allnovas?',
  'How does Allnovas ensure quality?',
  'Is Allnovas available worldwide?'
]

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('General')
  
  return (
    <section className="relative px-[200px] py-16">
      {/* Decorative Icon */}
      <FAQDecorIcon className="absolute left-[577px] top-[98px] h-[155px] w-[550px] text-[#f05658]" />
      
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h2 className="heading-lg mx-auto max-w-[650px] text-center">
              Frequently asked questions
            </h2>
            <p className="text-body-lg mx-auto max-w-[648px] text-center">
              These are the commonly asked questions on Allnovas. Still have some questions? Email us
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex items-center justify-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-body-semibold ${
                  activeTab === tab ? 'text-[#f4f4f4]' : 'text-[#0f0f0f]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="mx-auto w-full max-w-[1312px]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={index > 0 ? 'border-t border-[#e5e7eb]' : ''}
              >
                <AccordionTrigger className="py-6 text-left text-[16px] font-semibold leading-[19.20px] tracking-[-0.64px] text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {faq}
                </AccordionTrigger>
                <AccordionContent className="text-body-lg">
                  Answer content for {faq}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
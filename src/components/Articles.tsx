import { Button } from '@/components/ui/button'
import BrowseIcon from './icons/BrowseIcon'
import ArrowRightSmallIcon from './icons/ArrowRightSmallIcon'

const articles = [
  {
    image: '/images/article-1.jpg',
    title: 'How to Keep Your Clients, and earn their trust'
  },
  {
    image: '/images/article-2.jpg',
    title: 'Getting Started on Allnova: Basics of Allnova'
  },
  {
    image: '/images/article-3.jpg',
    title: 'Creating A Winning Gig Image: Convert Clients Easily'
  }
]

export default function Articles() {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-[120px] 2xl:px-[200px] py-12 md:py-16">
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-body-semibold text-primary">Insights</h2>
            <div className="flex flex-col gap-5">
              <h3 className="heading-lg max-w-[586px]">Latest Articles</h3>
              <p className="text-body-lg max-w-[586px]">
                Check out the latest updates and free resources from Allnova.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <BrowseIcon className="h-2.5 w-5 text-[#f05658]" />
            <button className="text-body-medium text-[#f05658]">View All post</button>
          </div>
        </div>
        
        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col gap-5">
              <img 
                src={article.image} 
                alt={article.title}
                className="h-[220px] sm:h-[250px] lg:h-[277px] w-full lg:w-[424px] rounded-2xl object-cover"
              />
              <div className="flex flex-col gap-5">
                <h4 className="text-[20px] font-semibold leading-7 text-[#0f0f0f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {article.title}
                </h4>
                <Button className="flex w-fit items-center gap-2 rounded-lg bg-[#171717] px-6 py-2 text-white hover:bg-[#2a2a2a]">
                  <span className="text-[14px] font-normal" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                    View Post
                  </span>
                  <ArrowRightSmallIcon className="h-2.5 w-[13px]" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
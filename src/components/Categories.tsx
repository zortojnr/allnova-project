import DecorIcon1 from './icons/DecorIcon1'
import DecorIcon2 from './icons/DecorIcon2'
import DecorIcon3 from './icons/DecorIcon3'

const categories = [
  { image: '/images/category-uiux.jpg', title: 'UI/UX Designer' },
  { image: '/images/category-web-dev.jpg', title: 'Web Development' },
  { image: '/images/category-mobile.jpg', title: 'Mobile App Development' },
  { image: '/images/category-graphics.jpg', title: 'Graphics Design' },
  { image: '/images/category-video.jpg', title: 'Video Editing & Animation' },
]

export default function Categories() {
  return (
    <section className="relative px-[200px] py-16">
      {/* Decorative Icons */}
      <DecorIcon1 className="absolute left-[155px] top-[441px] h-[19px] w-[10px] text-[#475367]" />
      <DecorIcon2 className="absolute right-[615px] top-[62px] h-[115px] w-[124px] text-[#f05658]" />
      <DecorIcon3 className="absolute right-[155px] top-[440px] h-[19px] w-[10px] text-[#475367]" />
      
      <div className="flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-6">
          <h2 className="text-body-semibold text-center text-primary">Specialized Niches</h2>
          <div className="flex flex-col gap-5">
            <h3 className="heading-lg mx-auto max-w-[660px] text-center">
              Your vision, Our niche
            </h3>
            <p className="text-body-lg mx-auto max-w-[660px] text-center">
              We connect clients with high-end freelancers across these categories
            </p>
          </div>
        </div>
        
        {/* Category Cards */}
        <div className="flex gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index === 4 ? 'w-[156px]' : 'w-[260px]'}`}
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="h-[230px] w-full rounded-t-[20px] object-cover"
              />
              <div className="flex h-[54px] items-center justify-center bg-white px-4">
                <p className="text-category text-center">{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';
import Btnn from './Btnn'; // Import Btnn component

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryType) => {
    navigate('/products', { state: { category: categoryType } });
    window.scrollTo(0, 0);
  };

  return (
    <section className='px-4 md:px-10 bg-zinc-50'>
      <div className='py-20 max-w-7xl mx-auto'>
        
        {/* Heading Section */}
        <div className="mb-12 text-center mx-auto">
          <Heading highlight="Shop" heading="by Collection" />
          <p className="text-zinc-500 md:text-center text-center mt-2 max-w-2xl mx-auto">
            Explore our exclusive collections for Men, Women, and the latest Tech.
          </p>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {categoryData.map((item) => (
            <div 
              key={item.id} 
              
              onClick={() => handleCategoryClick(item.categoryType)}
              className='group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-zinc-100 flex flex-col'
            >
              
              {/* Image Container */}
              <div className='h-80 w-full overflow-hidden relative'>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              {/* Text Content Overlay */}
              <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-24 flex flex-col items-start'>
                
                <h3 className='text-white text-3xl font-bold mb-2'>
                  {item.title}
                </h3>
                
                <p className='text-zinc-300 text-sm mb-6 line-clamp-2'>
                  {item.description}
                </p>
                
               
                <Btnn 
                  content="Shop Now" 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleCategoryClick(item.categoryType);
                  }}
                  className="!py-2 !px-6 text-sm" 
                />

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

// Data 
const categoryData = [
  {
    id: 1,
    title: "Men's Fashion",
    description: "Upgrade your style with top brands.",
    categoryType: "men",
    image: "/images/mensectionCard.webp" 
  },
  {
    id: 2,
    title: "Women's Collection",
    description: "Elegant styles for every occasion.",
    categoryType: "women",
    image: "/images/women15.webp"
  },
  {
    id: 3,
    title: "Electronics & Gadgets",
    description: "Latest tech at unbeatable prices.",
    categoryType: "electronics",
    image: "/images/electronic3.webp"
  },
];

export default Category;
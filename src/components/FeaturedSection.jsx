import React from 'react'
import Heading from './Heading'
import Btnn from './Btnn'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard' 
import ProductList from '../Data/ProductList' 

const FeaturedSection = () => {
  const navigate = useNavigate();

  //  Data Selection: 
 
  const trendingProducts = ProductList.filter(product => 
    [1, 47, 13, 36].includes(product.id) 
  );
  


  return (
    <section className='py-20 px-4 md:px-10 bg-white'>
      <div className='max-w-[1400px] mx-auto'>
        
        {/* Heading */}
        <div className="text-center mb-12">
           <Heading highlight="Trending" heading="Products" />
           <p className="text-zinc-500 mt-2">Top selling items this week</p>
        </div>
        
        {/* Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          
          {trendingProducts.map((product) => (
            <div key={product.id} className="h-full">
           
                <ProductCard 
                    id={product.id}
                    image={product.image}
                    title={product.title} 
                    price={product.price}
                    category={product.category}
                    rating={product.rating}
                />
            </div>
          ))}

        </div>

        {/* View All Button */}
        <div className='flex justify-center mt-16'>
           <Btnn 
             content="View All Products" 
             onClick={() => {
                navigate('/products');
                window.scrollTo(0,0);
             }}
             className="px-10"
           />
        </div>

      </div>
    </section>
  )
}

export default FeaturedSection
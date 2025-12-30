import React, { useState } from 'react';
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

// 1. IMPORT Product List
import ProductList from '../Data/ProductList'; 

// 2. IMPORT Product Card
import ProductCard from '../components/ProductCard'; 

// 3. Import Context to access the Search Query
import { useCart } from '../Context/CartContext'; 

const ProductPage = () => {
  // --- STATE MANAGEMENT ---
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_LIMIT = 8;
  const categories = ["All", "Men", "Women", "Electronics"];

  //  Get the 'searchQuery' from global state
  
  const { searchQuery } = useCart();

  // --- FILTERING LOGIC ---
  //  filter based on T Category AND Search Text
  const filteredProducts = ProductList.filter(product => {
    
    // Check Category
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;

    // Check Search Text convert everything to lowercase for easy matching 
    // add || "" to handle cases where name might be missing to prevent errors.
    const safeName = (product.name || product.title || "").toLowerCase();
    const safeQuery = searchQuery.toLowerCase();
    
    const searchMatch = safeName.includes(safeQuery);

    // Return product only if BOTH conditions are true
    return categoryMatch && searchMatch;
  });

  // --- SLICING LOGIC ---
  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, INITIAL_LIMIT);

  // Helper function to reset view when category changes
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[14vh] px-4 md:px-10 pb-10">

      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800">Our Collection</h1>
        <p className="text-zinc-500 mt-2">Find your favorite products here</p>
      </div>

      {/* --- FILTER TABS --- */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm
              ${selectedCategory === cat
                ? "bg-blue-600 text-white shadow-blue-300 shadow-md transform scale-105"
                : "bg-white text-zinc-600 hover:bg-blue-50 border border-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
        {visibleProducts.map((product) => (
          <div key={product.id} className="h-full">
            
            {/* Using  ProductCard */}
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

      {/* --- If NO PRODUCTS FOUND MESSAGE --- */}
      {/* If list is empty, show a specific message */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-zinc-400 mt-10 min-h-[20vh] flex flex-col items-center justify-center">
          <p className="text-xl">No products found matching "{searchQuery}".</p>
          {/* Button to reload page to clear everything easily */}
          <button onClick={() => window.location.reload()} className="mt-4 text-blue-600 font-semibold hover:underline">
            Clear Search
          </button>
        </div>
      )}

      {/* --- VIEW ALL BUTTON --- */}
      {filteredProducts.length > INITIAL_LIMIT && (
        <div className='mt-16 flex justify-center'>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-3 bg-white border border-zinc-300 text-zinc-800 font-semibold rounded-full hover:bg-zinc-100 transition-all shadow-sm hover:shadow-md"
          >
            {showAll ? (
              <>Show Less <FaArrowUp /></>
            ) : (
              <>View All Products <FaArrowRight /></>
            )}
          </button>
        </div>
      )}

    </div>
  );
};

export default ProductPage;
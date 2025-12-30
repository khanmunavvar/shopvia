import React, { useState } from 'react'
import Heading from './Heading'
import Btnn from './Btnn'

// --- 1. REVIEW CARD COMPONENT ---
const ReviewCard = ({ review }) => (
    <div className='w-full bg-zinc-50 p-6 rounded-2xl border border-zinc-100 flex flex-col gap-4 transition-all hover:bg-white hover:shadow-lg'>
        <div className='flex gap-1 text-orange-400'>
            {[...Array(5)].map((_, i) => (
                <span key={i} className='text-lg'>{i < review.rating ? '★' : '☆'}</span>
            ))}
        </div>
        <p className='text-zinc-700 italic text-base leading-relaxed overflow-hidden'>
            "{review.text}"
        </p>
        <div className='flex items-center gap-3 pt-4 border-t border-zinc-200 mt-auto'>
            <div className='w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0'>
                {review.name.charAt(0)}
            </div>
            <div className='truncate'>
                <h4 className='font-bold text-zinc-900 text-sm truncate'>{review.name}</h4>
                <p className='text-xs text-zinc-500 uppercase tracking-tighter'>{review.role}</p>
            </div>
        </div>
    </div>
)

// --- 2. REVIEW FORM COMPONENT ---
const ReviewForm = ({ onCancel, onSuccess }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSuccess(); // Success state trigger karega
    }

    return (
        <div className='w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-zinc-200 shadow-xl animate-in fade-in zoom-in duration-300'>
            <h3 className='text-xl font-bold mb-6 text-center text-zinc-800'>Write a Review</h3>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input required type="text" placeholder="Full Name" className='p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none' />
                <select className='p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none'>
                    <option value="5">5 Stars (Excellent)</option>
                    <option value="4">4 Stars (Great)</option>
                    <option value="3">3 Stars (Good)</option>
                </select>
                <textarea required placeholder="Your feedback..." rows="4" className='p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none'></textarea>
                <div className='flex gap-3 mt-2'>
                    <button type="submit" className='flex-1 bg-black text-white py-3 rounded-xl font-bold hover:bg-zinc-800 transition-colors'>Submit Review</button>
                    <button type="button" onClick={onCancel} className='px-6 py-3 bg-zinc-100 text-zinc-600 rounded-xl font-bold hover:bg-zinc-200 transition-colors'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

// --- 3. MAIN TESTIMONIALS SECTION ---
const Testimonials = () => {
    const [viewState, setViewState] = useState('idle'); // 'idle', 'form', 'success'
    
    const reviews = [
        { id: 1, name: "Rahul Sharma", role: "Verified Buyer", text: "The quality of the Nike shoes is exceptional. Fast delivery!", rating: 5 },
        { id: 2, name: "Anjali Gupta", role: "Blogger", text: "Found unique Adidas collections here. Highly recommended!", rating: 5 },
        { id: 3, name: "Vikram Singh", role: "Athlete", text: "Great experience. The products are 100% authentic.", rating: 4 }
    ]

    return (
        <section className="w-full bg-white overflow-x-hidden">
            <div className='max-w-[1400px]  text-center mx-auto px-4 md:px-10 py-16'>
                <Heading highlight='Customers' heading='Reviews'></Heading>

             
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                    {reviews.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Bottom Section: Button and Form - Always Centered */}
                <div className='mt-16 flex flex-col items-center justify-center min-h-[100px]'>
                    
                    {/* State 1: Write Review Button */}
                    {viewState === 'idle' && (
                        <div onClick={() => setViewState('form')} className='cursor-pointer active:scale-95 transition-transform'>
                            <Btnn content="Write a Review"></Btnn>
                        </div>
                    )}

                    {/* State 2: Review Form */}
                    {viewState === 'form' && (
                        <ReviewForm 
                            onCancel={() => setViewState('idle')} 
                            onSuccess={() => setViewState('success')} 
                        />
                    )}

                    {/* State 3: Success Message */}
                    {viewState === 'success' && (
                        <div className='text-center p-8 bg-green-50 rounded-2xl border border-green-200 animate-bounce'>
                            <h3 className='text-green-700 font-bold text-xl'>🎉 Thank You!</h3>
                            <p className='text-green-600 mt-1'>Your review has been submitted successfully.</p>
                            <button 
                                onClick={() => setViewState('idle')}
                                className='mt-4 text-sm font-bold text-green-700 underline underline-offset-4'
                            >
                                Back to Reviews
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
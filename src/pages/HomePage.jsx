import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Values1 from '../components/Values1'
import OfferSection from '../components/OfferSection'
import Testimonials from '../components/Testimonials'
import FeaturedSection from '../components/FeaturedSection'


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Category></Category>
            <OfferSection></OfferSection>
           <Values1></Values1>
           <FeaturedSection></FeaturedSection>
        <Testimonials></Testimonials>
          
        </div>
    )
}

export default Home

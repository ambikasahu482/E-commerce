import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import Newsletter from '../Components/NewsLetter/Newsletter'
import Footer from '../Components/Footer/Footer'
import Popular from '../components/Popular/Popular'
import NewCollections from '../components/NewCollections/NewCollections'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop
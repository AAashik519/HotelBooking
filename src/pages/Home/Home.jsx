import React from 'react'
import './home.css'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/Header/Header'
import Nabvar from '../../components/Navbar/Nabvar'
import Property from '../../components/Property/Property'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'

const Home = () => {
  return (
    <div> 
      <Nabvar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'> Browse by property type</h1>
        <Property />
        <h1 className='homeTitle'> Gomes guests love</h1>
          <FeaturedProperties />

      </div>
    </div>
  )
}

export default Home
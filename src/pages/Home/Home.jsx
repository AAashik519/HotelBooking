import React from 'react'
import './home.css'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/Header/Header'
import Nabvar from '../../components/Navbar/Nabvar'

const Home = () => {
  return (
    <div> 
      <Nabvar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'> Browse by property type</h1>
        

      </div>
    </div>
  )
}

export default Home
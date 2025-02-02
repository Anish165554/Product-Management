import React from 'react'
import { assets } from '../../assets/assets'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <img className='home-image' src={assets.home} alt="home" />
    </div>
  )
}

export default Home

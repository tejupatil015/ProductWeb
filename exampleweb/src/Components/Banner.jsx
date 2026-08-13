import React from 'react'
import BannerImage from '../assets/banner (1).jpg'

const Banner = () => {
  return (
    <section>
      <div>
        <div className="img">
          <img src={BannerImage} />
        </div>
        <div className='bannerinfo'>
          <h1 className="sale">Big Sale</h1>

          <p className="parabanner">50% off! Always use and trust </p>

          <div>
            <span>00</span>
            <span>00</span>
            <span>00</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
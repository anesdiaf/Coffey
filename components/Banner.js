import React from 'react'
import Styles from "../styles/Banner.module.css";


export default function Banner() {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <p className={Styles.title}>Coffey</p>
        <p className={Styles.description}>Our app allows you discover the best coffee shops in your current location so you can keep a high-quality experience with your coffee.</p>
        <button className={Styles.exploreButton}>Explore</button>
      </div>
      <video className={Styles.video} width="1616" height="1072" autoPlay muted loop>
        <source src='/static/coffee.mp4'/>
      </video>
    </div>
  )
}

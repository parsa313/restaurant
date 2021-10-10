import React from 'react'
import styles from './banner.module.css'
import burger from './../../assets/berger.jpg'
function Banner() {
    return (
        <section className={styles.banner}>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${styles.banner__text}`}>
              <h1>Be The Fastest In Delivering Your <span className={styles.red}>Food</span> </h1>
              <p>
                our job is to filling your tummy with delicious food and with fast and
                free delivery
              </p>
              <div>
                <button className={styles.button}>Get Started</button>
              </div>
            </div>
            <div className="col-md-6 img text-center">

              <img className={`${styles.banner__img} img-fluid`} src={burger} alt="burger" />


      
                
            </div>
          </div>
        </div>
      </section>
    )
}

export default Banner


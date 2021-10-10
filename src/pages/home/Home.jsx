import React from 'react'
import styles from './home.module.css'
import burger from './../../assets/berger.jpg'
import Banner from '../../components/banner/Banner'
import Introduce from '../../components/introduce/Introduce'
import { Fragment } from 'react'
import Info from '../../components/info/Info'
import Footer from '../../components/footer/Footer'

function Home() {
return (
<Fragment>
  <Banner/>
  <Introduce/>
  <Info/>
  </Fragment>
)
}

export default Home


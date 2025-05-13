import React from 'react'
import styles from './Home.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Components/Main/Main'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className={styles.home}>
        <Navbar/>
        <Main/>
        <Footer/>
        </div>
)  

}

export default Home
import type { NextPage } from 'next'
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'
// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ParticlesBackground />
    </div>
  )
}

export default Home
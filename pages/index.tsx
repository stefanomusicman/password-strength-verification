import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import StrengthTester from '../Components/StrengthTester'

const Home: NextPage = () => {
  return (
    <Fragment>
      <div className={styles.main}>
        <h1 className={styles.title}>Password Strength Tester</h1>
        <StrengthTester />
      </div>
    </Fragment>
  )
}

export default Home
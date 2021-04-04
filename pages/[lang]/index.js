import React, {
    useContext
  } from 'react'
  import Head from 'next/head'
  import styles from '../../styles/Home.module.css'
  import ContextApp from './../../context/App/ContextApp';
  
  export default function Home() {
    const {stateApp} = useContext(ContextApp)
    console.log(stateApp)
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className={styles.main}>
          <div className={styles.first}>
            <div className={styles.firstTitle}>Зарплата JS Middle и Full-Stack от 1000$</div>
            <div className={styles.firstButton}>START</div>
          </div>
        </div>
      </div>
    )
  }
  
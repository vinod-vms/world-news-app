import Head from 'next/head'
import Link from 'next/link'
import React, {Fragment} from 'react'
import styles from '../styles/Home.module.css'
const fetch = require('isomorphic-unfetch')
import Error from 'next/error'
//import Error from './_error.js'


function Home({errorCode, data}) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return (
    <div className={styles.container}>
      <Head>
      <title>Welcome! World News</title>
        <link rel="icon" href="/favicon_new.ico" />
      </Head>
      <main className={styles.main}>
        
        <div className={styles.headingGrid}>
        <div className={styles.headingCard}>
        <div className={styles.logoImg} >
      </div>
        <h1 className={styles.title}>
        World News
        </h1>
        
        <p className={styles.description}>
          Country: <Link href="/">
          <a>India </a>
        </Link>
        {'  '}
        |
        {'  '}
        <Link href="us">
          <a>US </a>
        </Link>
        </p>
        </div>
        </div>
        <div className={styles.grid}>

            {data.map(({publishedAt, title, urlToImage, url,description}) => (
              <React.Fragment key={publishedAt} >
                <a href={url} target="_blank" className={styles.card}>
                <img src={urlToImage} className={styles.cardImg} />
              <h4>  {title} </h4>
            <p>{description}</p> </a>
            <br/>
              </React.Fragment>
          ))
            }

          
          

          
        </div>
      </main>

      <footer className={styles.footer}>
      <p>
          Using <a href="https://newsapi.org" target="_blank">News API's</a> developer account
          </p>
          <p>&copy; {'  '} {(new Date().getFullYear())} <a href="https://vinod-vms.netlify.app" target="_blank" > Vinod Mathew Sebastian</a> </p>
<br/>              
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  
    //const aKey = process.env.API_KEY;
  var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' + 'apiKey=fe9339f8c8e7402ea579273f9d8d0114';
  
var req = new Request(url);
  const res = await fetch(req)
  const errorCode = res.ok ? false : res.statusCode
  let data = await res.json();
  return {
    props: {
      errorCode,
      data: data.articles,
    },
  } 
    
}
export default Home
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { DateTime } from 'luxon'
import React from 'react';

export default function Home() {
  const year = DateTime.now().toFormat('yyyy');
  const [ dataHora, setDataHora ] = React.useState(DateTime.now().toFormat('dd/MM/yyyy hh:mm:ss'))

  React.useEffect(() => {
    const umSegundo = 1000;
    const intervalo = setInterval(() => {
        setDataHora(DateTime.now().toFormat('dd/MM/yyyy hh:mm:ss'))
    }, umSegundo);
    
    return () => {
        clearInterval(intervalo);
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>TeInforma TECH - O seu portal de conteúdos sobre segurança</title>
        <meta name="description" content="Desenvolvido por voluntário(s)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <img src={'/logo.png'} className={styles.logo} />
          <br/>
          Bem vindo ao <a href="javascript: void(0)">TeInformaTECH!</a>
        </h1>

        <p className={styles.description}>
          Aqui será implementada a interface que o usuário final enxergará!
          <br/>
          Até que não exista nada nesta seção, você pode acessar a tela administrativa clicando <a target="_blank" href="http://localhost:8080" className={styles.link}>aqui</a>
          <br/>
          {dataHora}
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="javascript: void(0)"
          target="_blank"
          rel="noopener noreferrer"
          style={{textAlign: 'center'}}
        >
          Desenvolvido por Fulano, Ciclano 💻 <br/>
          Liderado por Fulano 🧑 <br/>
          Design por Fulana 🧞‍♀️  <br/>
          Organizado por Fulano 🍞 <br/>
          Conteúdo por Fulano e Ciclano 👮 <br/>
          @TeInformaTech {year} 💟 
        </a>
      </footer>
    </div>
  )
}

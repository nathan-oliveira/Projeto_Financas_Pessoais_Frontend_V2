import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  function toLinkedin() {
    window.open('https://www.linkedin.com/in/nathan-oliveira-mendonca/', '_blank');
  }

  return (
    <footer className={styles.footer}>
      Desenvolvido por <b onClick={toLinkedin}>Nathan Oliveira Mendonça</b>
    </footer>
  )
}

export default Footer
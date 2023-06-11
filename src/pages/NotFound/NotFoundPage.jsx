import React from 'react'
import './NotFoundPage.module.scss'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <>
      <h3 className={styles.TitlePage}>Not found page</h3>
      <p>Такої сторінки не існує, повернутися на - <span><Link to='/'>домашня</Link></span></p>
      <p></p>
    </>
  )
}

export default NotFoundPage
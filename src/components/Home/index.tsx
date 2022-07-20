import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {

  const {t}= useTranslation ()

  return (
    <>
    <div>Home</div>
    <h6>{t('Welcome to React')}</h6>
    </>
  )
}

export default Home
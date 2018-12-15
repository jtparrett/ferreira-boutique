import React from 'react'
import styles from 'styled-components'

import './index.css'

import Logo from './assets/logo.svg'
import Etsy from './assets/etsy.png'

const LogoImg = styles.img`
  display: block;
  width: 100%;
  margin-bottom: 50px;
`

const Wrapper = styles.div`
  width: 300px;
  max-width: 100%;
  margin: 100px auto;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
`

const Button = styles.a`
  text-transform: uppercase;
  padding: 10px 40px;
  font-size: 12px;
  color: #000;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  border-radius: 200px;
  border: 2px solid #eaeaea;

  &:hover {
    background: #eaeaea;
  }
`

const EtsyLogo = styles.img`
  width: 40px;
  margin-left: 8px;
  display: inline-block;
`

export default () => (
  <Wrapper>
    <LogoImg src={Logo} />
    <Button href="https://etsy.com/uk/shop/FerreiraBoutiqueCo" target="_blank">Shop on <EtsyLogo src={Etsy} /></Button>
  </Wrapper>
)
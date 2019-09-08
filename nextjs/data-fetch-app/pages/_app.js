import React, { useState } from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

import { HeaderContext } from '../apis/contexts'
import { onSubmit } from '../apis/Test'
import App from 'next/app'

let getInitialPropsCalled = false
let initialProps = {}
const getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json() // better use it inside try .. catch

  //console.log('app initial called')

  return { stars: json.stargazers_count, appdata: { app: 'app data' } }
}


class MyApp extends App {

  state = {}

  static async getInitialProps(appContext) {

    const appProps = await App.getInitialProps(appContext);

    //console.log('app get initail props called')

    if (!getInitialPropsCalled) {
      getInitialPropsCalled = true
      initialProps = await getInitialProps()
    }

    return { ...initialProps, ...appProps }
  }

  setMyState = (state) => {
    console.log('new State', state)
    this.setState(state)
  }

  // componentDidCatch() {

  // }

  getHeaderContextValue = () => {
    const headerCntxtVal = {
      onSubmit: (e) => {
        onSubmit(e, this.state, this.setMyState)
      }, message: this.state.message
    }

    return headerCntxtVal
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <HeaderContext.Provider value={this.getHeaderContextValue()} >
          <Layout >
            <Component {...pageProps} />
          </Layout>
        </HeaderContext.Provider>
      </div>
    )
  }
}

export default MyApp
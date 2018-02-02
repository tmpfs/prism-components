import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Layout from '../../src/Layout'
import BlockQuote from '../../src/BlockQuote'
import Citation from '../../src/Citation'

const copy = `Minimal, idiomatic style management for React Native.`

class BlockQuoteScreen extends ScreenRenderer {
  static title = 'BlockQuote'
  static navigationOptions = {
    header: BackNavigationHeader(BlockQuoteScreen.title)
  }
  list = [
    {
      label: 'Default',
      component: (
        <Layout>
          <BlockQuote>
            Minimal, idiomatic style management for React Native.
          </BlockQuote>
          <Citation>Muji 2018</Citation>
        </Layout>
      )
    },
    {
      label: 'Quoted',
      component: (
        <Layout>
          <BlockQuote quote>
            Minimal, idiomatic style management for React Native.
          </BlockQuote>
          <Citation>Muji 2018</Citation>
        </Layout>
      )
    },
    {
      label: 'Quoted & Emdash',
      component: (
        <Layout>
          <BlockQuote quote>
            Minimal, idiomatic style management for React Native.
          </BlockQuote>
          <Citation emdash>Muji 2018</Citation>
        </Layout>
      )
    }
  ]
}

export default BlockQuoteScreen

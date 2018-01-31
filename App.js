import React, {Component} from 'react'
import {Prism, StyleRegistry} from 'react-native-prism'

import {
  BlockQuote,
  Label,
  Paragraph,
  Layout,
  ScrollPane
} from './src'

import Colors from './app/Colors'
import Fonts from './app/Fonts'
import StyleSheet from './app/StyleSheet'

const registry = new StyleRegistry()
registry.addColors(Colors)
registry.addFonts(Fonts)
registry.addStyleSheet(StyleSheet)
Prism.configure(
  registry,
  {
    debug: true,
    extendedProperties: true
  }
)

const image = 'https://raw.githubusercontent.com/fika-community/prism/master/prism.png'

export default class App extends Component<{}> {
  render () {
    return (
      <Layout background='background'>
        <ScrollPane>
          <Layout>
            <Layout
              margin={20}
              padding={10}>
              <BlockQuote
                align='center'
                size={18}>
                  Minimal, idiomatic style management for React Native.
              </BlockQuote>
            </Layout>
          </Layout>
        </ScrollPane>
      </Layout>
    )
  }
}

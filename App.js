import React, {Component} from 'react'
import {Prism, StyleRegistry} from 'react-native-prism'

import Colors from './app/Colors'
import Fonts from './app/Fonts'
import StyleSheet from './app/StyleSheet'

import Layout from './src/Layout'
import ComponentList from './app/ComponentList'

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

export default class App extends Component<{}> {
  render () {
    return (
      <ComponentList />
    )
  }
}

import React, {Component} from 'react'
import {Prism, StyleRegistry} from 'react-native-prism'

import Layout from './src/Layout'
import ComponentList from './app/ComponentList'

import theme from './app/theme'

const registry = new StyleRegistry({theme})
// NOTE: we don't need to configure a registry
// NOTE: as the component set does it (see Layout)
Prism.configure(
  registry,
  {
    extendedProperties: true,
    fontProperties: true,
    experimentalPlugins: true,
    textTransform: true,
    colorNames: true,
    tintColor: true
  }
)

export default class App extends Component<{}> {
  render () {
    return (
      <ComponentList />
    )
  }
}

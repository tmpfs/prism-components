import React, {Component} from 'react'
import {Prism, StyleRegistry} from 'react-native-prism'

//import {
  //Activity,
  //BlockQuote,
  //BulletList,
  //Citation,
  //Heading,
  //Label,
  //Layout,
  //List,
  //ListItem,
  //Notice,
  //NumberStack,
  //Panel,
  //Paragraph,
  //Picture,
  //ScrollPane,
  //TextArea,
  //TouchButton as Button
//} from './src'

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

    //<Layout font={{size:'xx-large', color: 'red'}}>
      //<Layout>
        //<Panel label='Foo'>
          //<Label font={{color: 'green'}}>Some context text</Label>
        //</Panel>
      //</Layout>
    //</Layout>


export default class App extends Component<{}> {
  render () {
    return (
      <Layout background='background'>
        <ComponentList />
      </Layout>
    )
  }
}

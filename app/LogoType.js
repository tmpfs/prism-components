import React, {Component} from 'react'
import {Prism} from 'react-native-prism'

import Heading from '../src/Heading'
import Layout from '../src/Layout'
import Picture from '../src/Picture'
import ScrollPane from '../src/ScrollPane'

class LogoType extends Component {
  render () {
    return (
      <Layout
        flex={0}
        center
        margin={{top: 70, bottom: 20}}>
        <Picture
          width={128}
          height={128}
          source={require('../src/images/prism.png')}
        />
        <Heading font={{size: 'large'}}>Prism</Heading>
      </Layout>
    )
  }
}

export default Prism(LogoType)

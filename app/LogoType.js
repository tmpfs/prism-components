import React, {Component} from 'react'
import {Prism} from 'react-native-prism'

import Heading from '../src/Heading'
import Layout from '../src/Layout'
import Picture from '../src/Picture'
import ScrollPane from '../src/ScrollPane'

const image = 'https://raw.githubusercontent.com/fika-community/prism/master/prism.png'

class LogoType extends Component {
  render () {
    return (
      <Layout
        flex={0}
        center
        margin={20}
        padding={10}>
        <Picture
          width={128}
          height={128}
          source={{uri: image}}
        />
        <Heading font={{size: 'large'}}>Prism</Heading>
      </Layout>
    )
  }
}

export default Prism(LogoType)

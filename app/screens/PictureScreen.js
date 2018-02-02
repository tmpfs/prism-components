import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Layout from '../../src/Layout'
import Picture from '../../src/Picture'

class PictureScreen extends ScreenRenderer {
  static title = 'Image'
  static navigationOptions = {
    header: BackNavigationHeader(PictureScreen.title)
  }
  list = [
    {
      label: 'Embedded Image',
      component: (
        <Layout center={true} style={{height: 128}}>
          <Picture
            width={96}
            height={96}
            source={require('../../src/images/prism.png')} />
        </Layout>
      )
    },
    {
      label: 'Remote Image',
      component: (
        <Layout center={true} style={{height: 128}}>
          <Picture
            width={96}
            height={96}
            source={{
              uri: 'https://manaveda.com/assets/img/splash/sari.jpg?d=' + Date.now(),
              cache: 'no-cache'
            }} />
        </Layout>
      )
    },
  ]
}

export default PictureScreen

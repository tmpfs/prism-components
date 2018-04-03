import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Layout from '../../src/Layout'
import Picture from '../../src/Picture'

class PictureScreen extends ScreenRenderer {
  static title = 'Image'
  static navigationOptions = {
    name: 'PictureScreen',
    header: BackNavigationHeader()
  }
  list = [
    {
      label: 'Embedded Image',
      component: (
        <Layout center justify='center' style={{height: 128}}>
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
        <Layout center justify='center' style={{height: 128}}>
          <Picture
            width={96}
            height={96}
            source={{
              uri: 'https://manaveda.com/assets/img/splash/sari.jpg?d=' + Date.now(),
              cache: 'reload'
            }} />
        </Layout>
      )
    },
  ]
}

export default PictureScreen

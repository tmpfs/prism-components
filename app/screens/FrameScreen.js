import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Layout from '../../src/Layout'
import Frame from '../../src/Frame'

class FrameScreen extends ScreenRenderer {
  static title = 'Frame'
  static navigationOptions = {
    name: 'FrameScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Remote Page',
      component: (
        <Layout height={200}>
          <Frame src='https://cdn.fika.community/doc/terms.html'></Frame>
        </Layout>
      )
    }
  ]
}

export default FrameScreen

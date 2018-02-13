import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import BulletList from '../../src/BulletList'

class BulletListScreen extends ScreenRenderer {
  static title = 'Bullet List'
  static navigationOptions = {
    name: 'BulletListScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Unordered',
      component: (
        <BulletList items={['Go', 'Rust', 'Javascript']} />
      )
    },
    {
      label: 'Unordered Row',
      component: (
        <BulletList row items={['Go', 'Rust', 'Javascript']} />
      )
    },
    {
      label: 'Ordered',
      component: (
        <BulletList
          numerical={true}
          items={['Code', 'Test', 'Iterate']} />
      )
    },
    {
      label: 'Ordered Row',
      component: (
        <BulletList
          row
          numerical={true}
          items={['Code', 'Test', 'Iterate']} />
      )
    }
  ]
}

export default BulletListScreen

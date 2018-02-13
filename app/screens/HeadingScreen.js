import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Heading from '../../src/Heading'

const copy = `Heading`

class HeadingScreen extends ScreenRenderer {
  static title = 'Heading'
  static navigationOptions = {
    name: 'HeadingScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Sizes',
      component: (
        <List space={5}>
          <Heading size='xx-small'>
            {copy}
          </Heading>
          <Heading size='x-small'>
            {copy}
          </Heading>
          <Heading size='small'>
            {copy}
          </Heading>
          <Heading size='medium'>
            {copy}
          </Heading>
          <Heading size='large'>
            {copy}
          </Heading>
          <Heading size='x-large'>
            {copy}
          </Heading>
          <Heading size='xx-large'>
            {copy}
          </Heading>
        </List>
      )
    }
  ]
}

export default HeadingScreen

import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Heading from '../../src/Heading'

const copy = `Heading`

class HeadingScreen extends ScreenRenderer {
  static title = 'Heading'
  static navigationOptions = {
    header: BackNavigationHeader(HeadingScreen.title)
  }
  list = [
    {
      label: 'Sizes',
      component: (
        <List space={5}>
          <Heading font={{size: 'xx-small'}}>
            {copy}
          </Heading>
          <Heading font={{size: 'x-small'}}>
            {copy}
          </Heading>
          <Heading font={{size: 'small'}}>
            {copy}
          </Heading>
          <Heading font={{size: 'medium'}}>
            {copy}
          </Heading>
          <Heading font={{size: 'large'}}>
            {copy}
          </Heading>
          <Heading font={{size: 'x-large'}}>
            {copy}
          </Heading>
          <Heading font={{size: 'xx-large'}}>
            {copy}
          </Heading>
        </List>
      )
    }
  ]
}

export default HeadingScreen

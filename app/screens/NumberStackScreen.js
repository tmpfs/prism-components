import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import NumberStack from '../../src/NumberStack'

class NumberStackScreen extends ScreenRenderer {
  static title = 'Number Stack'
  static navigationOptions = {
    header: BackNavigationHeader()
  }
  list = [
    {
      label: 'Small',
      component: (
        <List row justify='between' all={{size: 'small', color: 'powderblue'}}>
          <NumberStack align='left' value={3}>Magic</NumberStack>
          <NumberStack value={7}>Magic</NumberStack>
          <NumberStack align='right' value={42}>Magic</NumberStack>
        </List>
      )
    },
    {
      label: 'Medium',
      component: (
        <List row justify='between' all={{size: 'medium', color: 'skyblue'}}>
          <NumberStack align='left' value={3}>Magic</NumberStack>
          <NumberStack value={7}>Magic number that is really long</NumberStack>
          <NumberStack align='right' value={42}>Magic</NumberStack>
        </List>
      )
    },
    {
      label: 'Large',
      component: (
        <List row justify='between' all={{size: 'large', color: 'background'}}>
          <NumberStack align='left' value={3}>Statistic</NumberStack>
          <NumberStack value={7}>Statistic</NumberStack>
          <NumberStack align='right' value={42}>Statistic</NumberStack>
        </List>
      )
    }
  ]
}

export default NumberStackScreen

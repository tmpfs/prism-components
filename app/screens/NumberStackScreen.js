import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import NumberStack from '../../src/NumberStack'

class NumberStackScreen extends ScreenRenderer {
  static title = 'Number Stack'
  static navigationOptions = {
    header: BackNavigationHeader(NumberStackScreen.title)
  }
  list = [
    {
      label: 'Small',
      component: (
        <List row all={{size: 'small', color: 'powderblue'}}>
          <NumberStack align='left' value={3}>Magic</NumberStack>
          <NumberStack value={7}>Magic</NumberStack>
          <NumberStack align='right' value={42}>Magic</NumberStack>
        </List>
      )
    },
    {
      label: 'Medium',
      component: (
        <List row all={{size: 'medium', color: 'skyblue'}}>
          <NumberStack align='left' value={3}>Magic Number is 3</NumberStack>
          <NumberStack value={7}>Magic Number is 7</NumberStack>
          <NumberStack align='right' value={42}>Magic Number is 42</NumberStack>
        </List>
      )
    },
    {
      label: 'Large',
      component: (
        <List row all={{size: 'large', color: 'background'}}>
          <NumberStack align='left' value={3}>Statistic</NumberStack>
          <NumberStack value={7}>Statistic</NumberStack>
          <NumberStack align='right' value={42}>Statistic</NumberStack>
        </List>
      )
    }
  ]
}

export default NumberStackScreen

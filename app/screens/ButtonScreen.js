
import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Button from '../../src/TouchButton'

class ButtonScreen extends ScreenRenderer {
  static title = 'Button'
  static navigationOptions = {
    header: BackNavigationHeader(ButtonScreen.title)
  }
  list = [
    {
      label: 'Enabled',
      component: (
        <Button>Touch Me</Button>
      )
    },
    {
      label: 'Disabled',
      component: (
        <Button disabled>Touch Me</Button>
      )
    }
  ]
}

export default ButtonScreen

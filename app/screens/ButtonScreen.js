
import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Button from '../../src/TouchButton'

class ExampleButtonStateChange extends Component {

  state = {
    disabled: true
  }

  render () {
    const toggle = () => {
      this.setState({disabled: !this.state.disabled})
    }
    const text = !this.state.disabled ? 'Enabled' : 'Disabled'
    return (
      <List space={20}>
        <Button id='target' disabled={this.state.disabled}>{text}</Button>
        <Button id='trigger' onPress={toggle}>Toggle Disabled State</Button>
      </List>
    )
  }
}

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
    },
    {
      label: 'State Change',
      component: (
        <ExampleButtonStateChange />
      )
    },
  ]
}

export default ButtonScreen

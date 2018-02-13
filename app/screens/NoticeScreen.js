import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Button from '../../src/TouchButton'
import Notice from '../../src/Notice'
import List from '../../src/List'

const copy = `Minimal, idiomatic style management for React Native.`

class NoticeStateExample extends Component {
  state = {
    error: true
  }

  render () {
    const toggle = () => {
      this.setState({error: !this.state.error})
    }
    return (
      <List space={10}>
        <Notice error={this.state.error}>
          {copy}
        </Notice>
        <Button onPress={toggle}>Toggle Error</Button>
      </List>
    )
  }
}

class NoticeScreen extends ScreenRenderer {
  static title = 'Notice'
  static navigationOptions = {
    name: 'NoticeScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Normal',
      component: (
        <Notice>
          {copy}
        </Notice>
      )
    },
    {
      label: 'Error',
      component: (
        <NoticeStateExample />
      )
    }
  ]
}

export default NoticeScreen

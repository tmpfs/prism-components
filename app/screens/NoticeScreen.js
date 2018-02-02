import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Notice from '../../src/Notice'

const copy = `Minimal, idiomatic style management for React Native.`

class NoticeScreen extends ScreenRenderer {
  static title = 'Notice'
  static navigationOptions = {
    header: BackNavigationHeader(NoticeScreen.title)
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
        <Notice error>
          {copy}
        </Notice>

      )
    }
  ]
}

export default NoticeScreen

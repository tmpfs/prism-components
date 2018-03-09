import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import TextArea from '../../src/TextArea'

class TextAreaScreen extends ScreenRenderer {
  static title = 'Text Area'
  static navigationOptions = {
    name: 'TextAreaScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Enabled',
      component: (
        <TextArea placeholder='Enter your comment'></TextArea>
      )
    },
    {
      label: 'Disabled',
      component: (
        <TextArea disabled>Do something before editing</TextArea>
      )
    },
  ]
}

export default TextAreaScreen

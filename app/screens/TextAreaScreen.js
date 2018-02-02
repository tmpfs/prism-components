import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import TextArea from '../../src/TextArea'

class TextAreaScreen extends ScreenRenderer {
  static title = 'Text Area'
  static navigationOptions = {
    header: BackNavigationHeader(TextAreaScreen.title)
  }
  list = [
    {
      label: 'Enabled',
      component: (
        <TextArea>Enter your comment</TextArea>
      )
    },
    {
      label: 'Disabled',
      component: (
        <TextArea disabled>Do something before editing</TextArea>
      )
    }
  ]
}

export default TextAreaScreen
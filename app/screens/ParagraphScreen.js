import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
//import back from '../../navigator/back'

import List from '../../src/List'
import Paragraph from '../../src/Paragraph'

const copy = `Minimal, idiomatic style management for React Native.`

class ParagraphScreen extends ScreenRenderer {
  static title = 'Paragraph'
  static navigationOptions = {
    //header: back(ParagraphScreen.title)
  }
  list = [
    {
      label: 'Paragraph',
      component: (
        <List space={5}>
          <Paragraph font={{size: 'xx-small'}}>
            {copy}
          </Paragraph>
          <Paragraph font={{size: 'x-small'}}>
            {copy}
          </Paragraph>
          <Paragraph font={{size: 'small'}}>
            {copy}
          </Paragraph>
          <Paragraph font={{size: 'medium'}}>
            {copy}
          </Paragraph>
          <Paragraph font={{size: 'large'}}>
            {copy}
          </Paragraph>
          <Paragraph font={{size: 'x-large'}}>
            {copy}
          </Paragraph>
          <Paragraph font={{size: 'xx-large'}}>
            {copy}
          </Paragraph>
        </List>
      )
    }
  ]
}

export default ParagraphScreen

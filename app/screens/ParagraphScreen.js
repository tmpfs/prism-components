import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Paragraph from '../../src/Paragraph'
import Label from '../../src/Label'

const copy = `Minimal, idiomatic style management for React Native.`

class ParagraphScreen extends ScreenRenderer {
  static title = 'Paragraph'
  static navigationOptions = {
    header: BackNavigationHeader(ParagraphScreen.title)
  }
  list = [
    {
      label: 'Sizes',
      component: (
        <List space={5}>
          <Paragraph size='xx-small'>
            {copy}
          </Paragraph>
          <Paragraph size='x-small'>
            {copy}
          </Paragraph>
          <Paragraph size='small'>
            {copy}
          </Paragraph>
          <Paragraph size='medium'>
            {copy}
          </Paragraph>
          <Paragraph size='large'>
            {copy}
          </Paragraph>
          <Paragraph size='x-large'>
            {copy}
          </Paragraph>
          <Paragraph size='xx-large'>
            {copy}
          </Paragraph>
        </List>
      )
    }
  ]
}

export default ParagraphScreen

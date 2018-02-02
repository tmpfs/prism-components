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
      label: 'Font Inheritance',
      component: (
        <List space={5} font={{size: 'large', color: 'cream'}}>
          <List space={10}>
            <Paragraph>
              This is some text that illustrates how text style props are inherited
              from the parent hierarchy.

              We add a <Label bold>large</Label> size to the grandparent List which
              propagates through the children using childContext.
            </Paragraph>

            <Paragraph font={{size: 'medium'}}>
              When it reaches the Label component it is applied to the underlying Text component.
            </Paragraph>

            <Paragraph font={{color: 'skyblue', size: 'small'}}>
              This paragraph overrides the grandparent color and size.
            </Paragraph>
          </List>
        </List>
      )
    },
    {
      label: 'Sizes',
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

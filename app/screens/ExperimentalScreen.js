import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Paragraph from '../../src/Paragraph'
import Label from '../../src/Label'

class ExperimentalScreen extends ScreenRenderer {
  static title = 'Font / Text Transform'
  static navigationOptions = {
    name: 'ExperimentalScreen',
    header: BackNavigationHeader()
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

              We add a <Label bold textTransform='uppercase'>large</Label> size to the grandparent List which propagates through the children using childContext.
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
      label: 'Text Transform',
      component: (
        <List space={5} textTransform='uppercase'>
          <List space={10}>
            <Paragraph>
              This is some uppercase text <Label textTransform='lowercase'>including some lowercase text in a Label</Label> in a paragraph. <Label textTransform='capitalize'>We can capitalize too</Label>.
            </Paragraph>
          </List>
        </List>
      )
    },
  ]
}

export default ExperimentalScreen

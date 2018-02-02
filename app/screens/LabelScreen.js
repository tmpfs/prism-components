import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Label from '../../src/Label'

const copy = `Minimal, idiomatic style management for React Native.`

class LabelScreen extends ScreenRenderer {
  static title = 'Label'
  static navigationOptions = {
    header: BackNavigationHeader(LabelScreen.title)
  }
  list = [
    {
      label: 'Label',
      component: (
        <List space={5}>
          <Label font={{size: 'xx-small'}}>
            {copy}
          </Label>
          <Label font={{size: 'x-small'}}>
            {copy}
          </Label>
          <Label font={{size: 'small'}}>
            {copy}
          </Label>
          <Label font={{size: 'medium'}}>
            {copy}
          </Label>
          <Label font={{size: 'large'}}>
            {copy}
          </Label>
          <Label font={{size: 'x-large'}}>
            {copy}
          </Label>
          <Label font={{size: 'xx-large'}}>
            {copy}
          </Label>
        </List>
      )
    }
  ]
}

export default LabelScreen

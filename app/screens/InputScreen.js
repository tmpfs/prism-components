import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Input from '../../src/Input'

class InputScreen extends ScreenRenderer {
  static title = 'Input'
  static navigationOptions = {
    name: 'InputScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Text',
      component: (
        <Input autoFocus placeholder='Text entry' />
      )
    },
    {
      label: 'Text Disabled',
      component: (
        <Input disabled placeholder='Disabled text entry' />
      )
    },
    {
      label: 'Email',
      component: (
        <Input type='email' placeholder='Enter your email address' />
      )
    },
    {
      label: 'Password',
      component: (
        <Input type='password' placeholder='Password' />
      )
    },
    {
      label: 'Telephone',
      component: (
        <Input type='tel' placeholder='Enter your telephone number' />
      )
    },
    {
      label: 'Number',
      component: (
        <Input type='number' placeholder='Enter a number' />
      )
    },
  ]
}

export default InputScreen

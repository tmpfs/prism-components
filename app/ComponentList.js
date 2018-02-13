import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Index, Categories} from './ComponentIndex'

import theme from '../src/theme'
const {colors} = theme

const screens = {
  Home: {screen: Index}
}

Categories.forEach((Type) => {
  const nm = Type.navigationOptions.name
  if (!nm) {
    throw new Error(`Navigation options name is required`)
  }
  screens[nm] = {screen: Type}
})

const config = {cardStyle: {backgroundColor: colors.background}}
export default StackNavigator(screens, config)

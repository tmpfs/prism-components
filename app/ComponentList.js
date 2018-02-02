import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Index, Categories} from './ComponentIndex'

const screens = {
  Home: {screen: Index}
}

Categories.forEach((Type) => {
  const nm = Type.name
  screens[nm] = {screen: Type}
})

const config = {cardStyle: {backgroundColor: 'transparent'}}
export default StackNavigator(screens, config)

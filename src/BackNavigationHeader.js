import React, {Component} from 'react'
import {Keyboard} from 'react-native'

import BackNavigation from './BackNavigation'

// Small utility to render a styled back navigation
// in StackNavigator, TabNavigator etc
const BackNavigationHeader = (screen, options = {title: 'Back'}) => {
  const {title} = options
  return (props) => {
    let {onPress, dismissKeyboard} = options
    if (dismissKeyboard === undefined) {
      dismissKeyboard = true
    }
    if (!onPress) {
      onPress=
        () => {
          if (dismissKeyboard) {
            Keyboard.dismiss()
          }
          if (screen) {
            return props.navigation.navigate(screen)
          }
          props.navigation.pop()
        }
    }
    return (
      <BackNavigation onPress={onPress}>
        {title}
      </BackNavigation>
    )
  }
}

export default BackNavigationHeader

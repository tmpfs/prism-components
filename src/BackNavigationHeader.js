import React, {Component} from 'react'
import {Keyboard} from 'react-native'

import BackNavigation from './BackNavigation'

// Small utility to render a styled back navigation
// in StackNavigator, TabNavigator etc
const BackNavigationHeader = (title, screen, options = {}) => {
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
          props.navigation.goBack()
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

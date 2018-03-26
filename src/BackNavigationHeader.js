import React, {Component} from 'react'
import {Keyboard} from 'react-native'
import {Prism} from 'react-native-prism'
import namespace from './namespace'

import {View} from 'react-native-prism-primitives'
import BackNavigation from './BackNavigation'

// Small utility to render a styled back navigation
// in StackNavigator, TabNavigator etc
const BackNavigationHeader = (screen, options = {title: 'Back'}) => {
  const {title} = options
  if (typeof(screen) === 'function') {
    options.onPress = screen
    screen = null
  }

  class BackNavigationHeader extends Component {
    static styleName = 'BackNavigationHeader'

    //static styleOptions = {
      //flat: true
    //}

    render () {
      const {props} = this
      const {style} = props

      //console.log(style)
      //console.log(title)

      let {
        onPress,
        dismissKeyboard,
        headerRight
      } = options

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
      } else {
        const parentOnPress = onPress
        onPress = () => {
          if (dismissKeyboard) {
            Keyboard.dismiss()
          }
          parentOnPress(props)
        }
      }

      const headerLeft = options.headerLeft || (
        <BackNavigation onPress={onPress}>
          {title}
        </BackNavigation>
      )

      // NOTE: must reset position to relative
      return (
        <View style={[style, {position: 'relative'}]}>
          {headerLeft}
          {headerRight}
        </View>
      )
    }
  }

  const Header = Prism(BackNavigationHeader, {namespace})
  // NOTE: must export a function for `react-navigation`
  return (props) => <Header {...props} />
}

export default BackNavigationHeader

import React, {Component} from 'react'
import {Keyboard} from 'react-native'
import {Prism} from 'react-native-prism'
import namespace from './namespace'

import {View} from 'react-native-prism-primitives'
import BackNavigation from './BackNavigation'

class BackNavigationHeader extends Component {
  static styleName = 'BackNavigationHeader'

  //static styleOptions = {
    //flat: true
  //}

  render () {
    const {style, options, screen} = this.props
    const {title} = options

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
            return this.props.navigation.navigate(screen)
          }
          this.props.navigation.pop()
        }
    } else {
      const parentOnPress = onPress
      onPress = () => {
        if (dismissKeyboard) {
          Keyboard.dismiss()
        }
        parentOnPress(this.props)
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

// Small utility to render a styled back navigation
// in StackNavigator, TabNavigator etc

// NOTE: must export a function for `react-navigation`
export default (screen, options = {title: 'Back'}) => {
  if (typeof(screen) === 'function') {
    options.onPress = screen
    screen = null
  }
  return (props) => <Header {...props} screen={screen} options={options} />
}

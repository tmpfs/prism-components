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
    const {style, options} = this.props
    const {title} = options

    //console.log(style)
    //console.log(title)

    let {onPress} = this.props

    let {
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
export default (onPress, options = {title: 'Back'}) => {
  if (typeof(onPress) === 'object') {
    options = onPress
    onPress = null
  }
  return (props) => <Header {...props} onPress={onPress} options={options} />
}

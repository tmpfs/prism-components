import React, {Component} from 'react'

import BackNavigation from './BackNavigation'

// Small utility to render a styled back navigation
// in StackNavigator, TabNavigator etc
const BackNavigationHeader = (title, screen) => {
  return (props) => {
    return (
      <BackNavigation
        onPress={
          () => {
            if (screen) {
              return props.navigation.navigate(screen)
            }
            props.navigation.goBack()
          }
        }>
        {title}
      </BackNavigation>
    )
  }
}

export default BackNavigationHeader

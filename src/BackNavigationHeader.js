import React, {Component} from 'react'

import BackNavigation from './BackNavigation'

// Small utility to render a styled back navigation
// in StackNavigator, TabNavigator etc
const BackNavigationHeader = (title) => {
  return (props) => {
    return (
      <BackNavigation
        onPress={
          () => {
            props.navigation.goBack()
          }
        }>
        {title}
      </BackNavigation>
    )
  }
}

export default BackNavigationHeader

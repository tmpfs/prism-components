import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ScrollView} from 'react-native'
import {Prism} from 'react-native-prism'
import namespace from './namespace'

class ScrollPane extends Component {

  static styleName = 'ScrollPane'

  render () {
    return (
      <ScrollView {...this.props}>{this.props.children}</ScrollView>
    )
  }
}

export default Prism(ScrollPane, {namespace})

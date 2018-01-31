import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ScrollView} from 'react-native'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'

class ScrollPane extends Component {
  static styleOptions = ({compile}) => {
    return {
      defaultStyles: [compile({flex: 1})]
    }
  }
  render () {
    return (
      <ScrollView {...this.props}>{this.props.children}</ScrollView>
    )
  }
}

export default Prism(ScrollPane, Namespace)

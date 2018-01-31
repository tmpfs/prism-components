import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import TouchButton from './TouchButton'

class ListItem extends Component {

  render () {
    const {style, title, onPress} = this.props
    return (
      <TouchButton
        onPress={onPress}
        title={title}
        style={style}>
        {this.props.children}
      </TouchButton>
    )
  }
}

export default Prism(ListItem, Namespace)

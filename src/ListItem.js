import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import {Prism} from 'react-native-prism'
import namespace from './namespace'
import TouchButton from './TouchButton'

class ListItem extends Component {

  static mapPropsToStyle = {
    labelStyle: {}
  }

  render () {
    const {style, labelStyle, title, onPress} = this.props
    return (
      <TouchButton
        onPress={onPress}
        title={title}
        labelStyle={labelStyle}
        style={style}>
        {this.props.children}
      </TouchButton>
    )
  }
}

export default Prism(ListItem, {namespace})

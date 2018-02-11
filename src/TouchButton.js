import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import {TouchableOpacity} from 'react-native-prism-primitives'
import namespace from './namespace'
import Label from './Label'

class TouchButton extends Component {

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
        labelStyle: {},
        disabled: ({css, prop}) => {
          if (prop === true) {
            return css.pseudo('disabled')
          }
        }
      }
    }
  }

  static propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
  }

  render() {
    const {style, title, labelStyle, onPress} = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={style}>
        <Label
          style={labelStyle}>
          {this.props.children || title}
        </Label>
      </TouchableOpacity>
    )
  }
}

export default Prism(TouchButton, {namespace})

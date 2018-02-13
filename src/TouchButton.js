import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import {TouchableOpacity} from 'react-native-prism-primitives'
import namespace from './namespace'
import Label from './Label'

class TouchButton extends Component {

  static styleName = 'TouchButton'

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
    onPress: PropTypes.func,
    multiline: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ])
  }

  render() {
    const {style, title, labelStyle, onPress} = this.props
    let {multiline} = this.props
    if (typeof(multiline) === 'boolean') {
      multiline = parseInt(multiline) === 0 ? 1 : 0
    }
    return (
      <TouchableOpacity
        onPress={onPress}
        style={style}>
        <Label
          {...this.props}
          lines={multiline}
          style={labelStyle}>
          {this.props.children || title}
        </Label>
      </TouchableOpacity>
    )
  }
}

export default Prism(TouchButton, {namespace})

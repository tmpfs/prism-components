import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import {TouchableOpacity} from 'react-native-prism-primitives'
import Namespace from './Namespace'
import Label from './Label'

class TouchButton extends Component {

  static styleOptions = ({compile}) => {
    return {
      className: 'Button',
      mapPropsToComponent: {
        labelStyle: ['color']
      },
      mapPropsToStyleState: ({props}) => {
        if (props.disabled) {
          return 'disabled'
        }
      }
    }
  }

  static propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    disabledOpacity: PropTypes.number,
  }

  static defaultProps = {
    disabled: false,
    disabledOpacity: 0.2
  }

  state = {
    disabled: false,
    opacity: 1
  }

  componentWillMount () {
    const {disabled, disabledOpacity} = this.props
    if (disabled) {
      this.setState(
        {disabled: true, opacity: disabledOpacity})
    }
  }

  render() {
    const {style, title, labelStyle, color, onPress} = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{opacity: this.state.opacity}}>
        <Label
          color={color}
          style={style}>
          {this.props.children || title}
        </Label>
      </TouchableOpacity>
    )
  }
}

export default Prism(TouchButton, Namespace)

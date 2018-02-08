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
        disabled: ({state, prop}) => {
          if (prop === true) {
            return state('disabled')
          }
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

    // TODO: move to state management?
    style.push({opacity: this.state.opacity})

    return (
      <TouchableOpacity
        onPress={onPress}
        style={style}>
        <Label
          color={color}
          style={labelStyle}>
          {this.props.children || title}
        </Label>
      </TouchableOpacity>
    )
  }
}

export default Prism(TouchButton, {namespace})

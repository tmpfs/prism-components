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
      mapPropsToStyleObject: {
        label: ['color']
      },
      mapPropsToStyleState: ({props}) => {
        if (props.disabled) {
          return 'Disabled'
        }
      }
    }
  }

  static propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
  }

  static defaultProps = {
    disabled: false
  }

  state = {
    disabled: false,
    opacity: 1
  }

  componentWillMount () {
    if (this.props.disabled) {
      this.setState({disabled: true, opacity: 0.4})
    }
  }

  render() {
    const {style, labelStyle, onPress} = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{opacity: this.state.opacity}}>
        <Label
          style={style}>
          {this.props.children}
        </Label>
      </TouchableOpacity>
    )
  }
}

export default Prism(TouchButton, Namespace)

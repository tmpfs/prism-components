import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {Text} from 'react-native-prism-primitives'
import namespace from './namespace'

class Label extends Component {

  static styleOptions = {
    supportsText: true
  }

  static propTypes = {
    textProps: PropTypes.object,
    lines: PropTypes.number,
    ellipsis: PropTypes.oneOf(
      ['head', 'middle', 'tail', 'clip'])
  }

  static defaultProps = {
    lines: 1
  }

  render() {
    const {
      style,
      size,
      textProps,
      color,
      lines,
      ellipsis
    } = this.props

    return (
      <Text
        numberOfLines={lines}
        ellipsizeMode={ellipsis}
        style={style}
        {...textProps}>{this.props.children}</Text>
    )
  }
}

export default Prism(Label, {namespace})

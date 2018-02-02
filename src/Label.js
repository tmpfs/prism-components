import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {Text} from 'react-native-prism-primitives'
import Namespace from './Namespace'

class Label extends Component {

  static styleOptions = ({styleSheet, sizes}) => {
    return {
      supportsText: true,
      mapPropsToStyle: {
        align: ({prop, styleSheet}) => {
          return {textAlign: prop}
        },
        color: ({prop, styleSheet}) => {
          return {color: prop}
        },
        bold: ({prop, styleSheet}) => {
          if (styleSheet.bold !== undefined) {
            return styleSheet.bold
          }
          return {fontWeight: 'bold'}
        }
      }
    }
  }

  static propTypes = {
    textProps: PropTypes.object,
    lines: PropTypes.number,
    ellipsis: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    bold: PropTypes.bool,
    color: PropTypes.string
  }

  static defaultProps = {
    lines: 1
  }

  render() {
    const {
      style,
      text,
      textProps,
      lines,
      ellipsis,
      color
    } = this.props

    let {children} = this.props

    if (text && text.transformedText) {
      children = text.transformedText
    }

    return (
      <Text
        numberOfLines={lines}
        ellipsizeMode={ellipsis}
        color={color}
        style={style}
        {...textProps}>{children}</Text>
    )
  }
}

export default Prism(Label, Namespace)

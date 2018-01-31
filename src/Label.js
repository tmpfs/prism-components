import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'

class Label extends Component {

  static styleOptions = ({styleSheet}) => {
    return {
      mapPropsToStyleProp: {
        align: 'textAlign'
      },
      mapPropsToStyle: {
        color: ({prop, styleSheet}) => {
          return {color: prop}
        },
        bold: ({prop, styleSheet}) => {
          if (styleSheet.bold !== undefined) {
            return styleSheet.bold
          }
          return {fontWeight: 'bold'}
        },
        size: ({prop, styleSheet}) => {
          if (typeof(prop) === 'number') {
            return {fontSize: prop}
          }
          // TODO: named sizes
        }
      }
    }
  }

  static propTypes = {
    textProps: PropTypes.object,
    lines: PropTypes.number,
    ellipsis: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    bold: PropTypes.bool,
    color: PropTypes.string
  }

  static defaultProps = {
    size: 16,
    lines: 1
  }

  render() {
    const {
      style,
      textProps,
      lines,
      ellipsis,
      color
    } = this.props
    return (
      <Text
        numberOfLines={lines}
        ellipsizeMode={ellipsis}
        color={color}
        style={style}
        {...textProps}>{this.props.children}</Text>
    )
  }
}

export default Prism(Label, Namespace)

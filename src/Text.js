import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text as NativeText} from 'react-native'
import {Prism} from 'react-native-prism'

class Text extends Component {

  static styleOptions = ({styleSheet}) => {
    return {
      mapPropsToStyle: {
        bold: ({prop, styleSheet}) => {
          if (styleSheet.bold !== undefined) {
            return styleSheet.bold
          }
          return {fontWeight: 'bold'}
        },
        center: ({prop, styleSheet}) => {
          if (prop) {
            return styleSheet.textCenter
          }
        },
        size: ({prop, styleSheet}) => {
          if (typeof(prop) === 'number') {
            return {fontSize: prop}
          }
          // TODO: named sizes
          switch(prop) {
            case 'small':
              return styleSheet.TextSmall
            case 'large':
              return styleSheet.TextLarge
              break
          }
        }
      }
    }
  }

  static propTypes = {
    textProps: PropTypes.object,
    transform: PropTypes.oneOf(['none', 'upper', 'lower']),
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    center: PropTypes.bool,
    bold: PropTypes.bool,
    color: PropTypes.string
  }

  static defaultProps = {
    transform: 'none',
    size: 'medium',
    bold: false,
    center: false
    //color: Colors.green
  }

  render() {
    const {style, textProps} = this.props
    let {label} = this.props
    label = label || this.props.children
    if (typeof(label) === 'string') {
      switch (this.props.transform) {
        case 'upper':
          label = label.toUpperCase()
          break;
        case 'lower':
          label = label.toLowerCase()
          break;
      }
    }
    return (
      <NativeText {...textProps} style={style}>{this.props.children}</NativeText>
    )
  }
}

export default Prism(Text)

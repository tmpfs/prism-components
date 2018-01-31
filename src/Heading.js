import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Label from './Label'
import Namespace from './Namespace'

class Heading extends Component {

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
        center: ({prop, styleSheet}) => {
          if (prop) {
            return styleSheet.textCenter
          }
        },
        size: ({prop, styleSheet}) => {
          switch(prop) {
            case 'small':
              return styleSheet.HeadingSmall
            case 'large':
              return styleSheet.HeadingLarge
          }
        }
      }
    }
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    center: PropTypes.bool
  }

  static defaultProps = {
    size: 'medium',
    center: false
  }

  render() {
    const {style, label, center} = this.props
    return (
      <Label
        label={label}
        center={center}
        style={style} />
    )
  }
}

export default Prism(Heading, Namespace)

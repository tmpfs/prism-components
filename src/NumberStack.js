import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Layout from './Layout'
import Label from './Label'
import Namespace from './Namespace'

class NumberStack extends Component {

  static styleOptions = () => {
    return {
      supportsColor: true,
      mapPropsToComponent: {
        titleStyle: ['color'],
        numberStyle: ['color']
      },
      mapPropsToStyleState: ({props}) => {
        const {size} = props
        if (size) {
          return size
          //const stateName = size.charAt(0).toUpperCase() + size.substr(1)
          //return stateName
        }
      }
    }
  }

  static propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
    bold: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  static defaultProps = {
    bold: true,
    size: 'medium',
    align: 'center'
  }

  render() {
    const {
      style,
      align,
      color,
      bold,
      value,
      titleStyle,
      numberStyle
    } = this.props

    const center = (align === 'center')
    let ellipsis
    if (align === 'right') {
      ellipsis='head'
    }

    const title = (
      <Label
        align={align}
        bold={bold}
        color={color}
        ellipsis={ellipsis}
        style={titleStyle}>
        {this.props.children}
      </Label>
    )

    const num = (
      <Label
        align={align}
        bold={bold}
        color={color}
        ellipsis={ellipsis}
        style={numberStyle}>
        {value.toString()}
      </Label>
    )

    return (
      <Layout center={center} style={style}>
        {title}
        {num}
      </Layout>
    )
  }
}

export default Prism(NumberStack, Namespace)

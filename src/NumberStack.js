import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Layout from './Layout'
import Label from './Label'
import namespace from './namespace'

class NumberStack extends Component {

  static mapPropsToStyle = {
    titleStyle: {
      size: ({css, prop}) => css.pseudo(prop)
    },
    numberStyle: {
      size: ({css, prop}) => css.pseudo(prop)
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

    const title = this.props.children ? (
      <Label
        flex={0}
        align={align}
        bold={bold}
        color={color}
        ellipsis={ellipsis}
        style={titleStyle}>
        {this.props.children}
      </Label>
    ) : null

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
      <Layout justify='center' style={style}>
        {title}
        {num}
      </Layout>
    )
  }
}

export default Prism(NumberStack, {namespace})

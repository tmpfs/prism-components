import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Layout from './Layout'
import Label from './Label'
import Namespace from './Namespace'

const Sizes = {
  large: {
    label: 24,
    value: 70
  },
  medium: {
    label: 20,
    value: 55
  },
  small: {
    label: 16,
    value: 40
  }
}

class NumberStack extends Component {

  static propTypes = {
    label: PropTypes.string,
    transform: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
    bold: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  static defaultProps = {
    bold: true,
    size: 'medium',
    transform: 'upper'
  }

  render() {
    const {style, size, label, color, bold, value, transform} = this.props
    const fontSize = Sizes[size]
    const title = (
      <Label
        label={label}
        bold={bold}
        transform={transform}
        style={style.concat({fontSize: fontSize.label})} />
    )

    const num = (
      <Label
        label={value.toString()}
        bold={bold}
        style={style.concat({fontSize: fontSize.value})} />
    )

    return (
      <Layout center={true}>
        {title}
        {num}
      </Layout>
    )
  }
}

export default Prism(NumberStack, Namespace)

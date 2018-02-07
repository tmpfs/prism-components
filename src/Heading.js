import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Paragraph from './Paragraph'
import namespace from './namespace'

class Heading extends Component {

  static styleOptions = () => {
    return {
      supportsText: true,
      sizes: {
        'xx-small': 16,
        'x-small': 20,
        'small': 24,
        'medium': 30,
        'large': 36,
        'x-large': 42,
        'xx-large': 48
      }
    }
  }

  render() {
    const {style} = this.props
    return (
      <Paragraph
        {...this.props}
        style={style}>
        {this.props.children}
      </Paragraph>
    )
  }
}

export default Prism(Heading, {namespace})

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import {Prism} from 'react-native-prism'
import Label from './Label'
import Namespace from './Namespace'

class Paragraph extends Component {
  static propTypes = {
    lines: PropTypes.number
  }

  static defaultProps = {
    lines: 0,
    size: 18
  }

  render() {
    return (
      <Label {...this.props}>{this.props.children}</Label>
    )
  }
}

export default Prism(Paragraph, Namespace)

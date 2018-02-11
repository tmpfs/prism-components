import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import {Prism} from 'react-native-prism'
import Label from './Label'
import namespace from './namespace'

class Paragraph extends Component {

  static styleOptions = {
    supportsText: true
  }

  static propTypes = {
    lines: PropTypes.number
  }

  static defaultProps = {
    lines: 0
  }

  render() {
    return (
      <Label {...this.props}>{this.props.children}</Label>
    )
  }
}

export default Prism(Paragraph, {namespace})

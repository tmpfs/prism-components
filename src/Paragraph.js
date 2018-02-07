import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import {Prism} from 'react-native-prism'
import Label from './Label'
import namespace from './namespace'

class Paragraph extends Component {

  static styleOptions = () => {
    return {
      //supportsText: true,
      //sizes: {
        //'xx-small': 13,
        //'x-small': 14,
        //'small': 16,
        //'medium': 18,
        //'large': 22,
        //'x-large': 26,
        //'xx-large': 30
      //}
    }
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

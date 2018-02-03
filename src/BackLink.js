import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {Image, TouchableOpacity} from 'react-native-prism-primitives'

import Namespace from './Namespace'
import Label from './Label'

class BackLink extends Component {

  static propTypes = {
    onPress: PropTypes.func
  }

  static mapPropsToComponent = {
    image: [],
    label: []
  }

  render() {
    const {style, imageStyle, labelStyle, onPress} = this.props
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Image
          width={13}
          height={22}
          style={imageStyle}
          source={require('./images/chevron.png')} />
        <Label
          style={labelStyle}>
          {this.props.children}
        </Label>
      </TouchableOpacity>
    )
  }
}

export default Prism(BackLink, Namespace)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {Image} from 'react-native-prism-primitives'

import Namespace from './Namespace'
import Label from './Label'
import ListItem from './ListItem'

class BackLink extends Component {

  static propTypes = {
    onPress: PropTypes.func
  }

  render() {
    const {style, onPress} = this.props
    return (
      <ListItem row style={style} onPress={onPress}>
        <Image
          border='green'
          style={{height: 22, width: 13, marginRight: 5}}
          source={require('./images/chevron.png')} />
        <Label
          style={{marginLeft: 4}}>
        {this.props.children}
        </Label>
      </ListItem>
    )
  }
}

export default Prism(BackLink, Namespace)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import Namespace from './Namespace'
import Layout from './Layout'
import BackLink from './BackLink'

class BackNavigation extends Component {

  static propTypes = {
    onPress: PropTypes.func
  }

  render() {
    return (
      <BackLink {...this.props}>
        {this.props.children}
      </BackLink>
    )
  }
}

export default Prism(BackNavigation, Namespace)

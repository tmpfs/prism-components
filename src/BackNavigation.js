import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import Namespace from './Namespace'
import Layout from './Layout'
import BackLink from './BackLink'

class BackNavigation extends Component {

  static mapPropsToComponent = {
    linkStyle: []
  }

  static propTypes = {
    onPress: PropTypes.func
  }

  render() {
    const {style, linkStyle, onPress} = this.props
    return (
      <Layout style={style}>
        <BackLink style={linkStyle} onPress={onPress}>
          {this.props.children}
        </BackLink>
      </Layout>
    )
  }
}

export default Prism(BackNavigation, Namespace)

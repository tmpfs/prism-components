import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import namespace from './namespace'
import Layout from './Layout'
import BackLink from './BackLink'
import withPreventDoubleTap from './withPreventDoubleTap'

class BackNavigation extends Component {

  static styleName = 'BackNavigation'

  static mapPropsToStyle = {
    linkStyle: {}
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

export default Prism(withPreventDoubleTap(BackNavigation), {namespace})

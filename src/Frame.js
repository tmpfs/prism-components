import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {WebView} from 'react-native-prism-primitives'

import Activity from './Activity'
import namespace from './namespace'

class Frame extends Component {

  static styleName = 'Frame'

  static styleOptions = {
    supportsDimension: true
  }

  static propTypes = {
    src: PropTypes.string,
    source: WebView.propTypes.source
  }

  render() {
    const {src, style} = this.props
    let {source, renderLoading} = this.props
    if (!source) {
      source = {uri: src}
    }

    if (!renderLoading) {
      // TODO: validate activity indicator is shown and centred
      renderLoading = () => {
        return <Activity />
      }
    }

    return (
      <WebView
        {...this.props}
        renderLoading={renderLoading}
        source={source}
        style={style}>
        {this.props.children}
      </WebView>
    )
  }
}

export default Prism(Frame, {namespace})

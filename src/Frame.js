import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {WebView} from 'react-native-prism-primitives'

import Activity from './Activity'
import Layout from './Layout'
import namespace from './namespace'

class Frame extends Component {

  static styleName = 'Frame'

  static styleOptions = {
    supportsDimension: true,
    mapPropsToStyle: {
      activityStyle: {}
    }
  }

  static propTypes = {
    src: PropTypes.string,
    source: WebView.propTypes.source,
    // Large activity indicator
    large: PropTypes.bool
  }

  static defaultProps = {
    large: true
  }

  render() {
    const {src, style, activityStyle, large} = this.props
    let {source, renderLoading} = this.props
    if (!source) {
      source = {uri: src}
    }

    if (!renderLoading) {
      // TODO: validate activity indicator is shown and centred
      renderLoading = () => {
        return (
          <Layout justify='center' center>
            <Activity large={large} style={activityStyle} />
          </Layout>
        )
      }
    }

    return (
      <WebView
        renderLoading={renderLoading}
        startInLoadingState={true}
        {...this.props}
        source={source}
        style={style}>
        {this.props.children}
      </WebView>
    )
  }
}

export default Prism(Frame, {namespace})

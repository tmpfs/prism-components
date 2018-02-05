import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ActivityIndicator} from 'react-native-prism-primitives'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'
import Label from './Label'

import {StyleSheet} from 'react-native'

class Activity extends Component {

  static styleOptions = () => {
    return {
      mapStyleToComponent: {
        activityIndicatorStyle: []
      }
    }
  }

  static propTypes = {
    labelProps: PropTypes.object,
    large: PropTypes.bool,
    tintColor: PropTypes.string,
    space: PropTypes.number,
    stacked: PropTypes.bool
  }

  static defaultProps = {
    size: 'large',
    space: 10,
    stacked: false,
    labelProps: {}
  }

  render() {
    const {
      style,
      activityIndicatorStyle,
      large,
      children,
      tintColor,
      stacked,
      space,
      labelProps
    } = this.props

    const activitySize = large ? 'large' : 'small'

    // Default is no label
    let activity = (
      <ActivityIndicator
        size={activitySize}
        color={tintColor}
        style={activityIndicatorStyle} />
    )

    let element = activity

    if (children) {
      element = stacked ? (
        <Layout center style={style}>
          {activity}
          <Label
            style={{marginTop: space}}
            {...labelProps}>
            {children}
          </Label>
        </Layout>
      ) : (
        <Layout row center style={style}>
          {activity}
          <Label
            style={{marginLeft: space}}
            {...labelProps}>
            {children}
          </Label>
        </Layout>
      )
    }

    return element
  }
}

export default Prism(Activity, Namespace)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ActivityIndicator} from 'react-native-prism-primitives'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'
import Label from './Label'

import {StyleSheet} from 'react-native'

const colors = {
  tint: '#5affda'
}

class Activity extends Component {

  static styleOptions = ({compile}) => {
    return {
      //supportsText: true,
      colors: colors,
      defaultStyles: [
        compile({flex: 1, backgroundColor: 'transparent'})],
      mapPropsToStyleObject: {
        activityIndicator: ['color', 'flex']
      }
    }
  }

  static propTypes = {
    labelProps: PropTypes.object,
    large: PropTypes.bool,
    tint: PropTypes.string,
    space: PropTypes.number,
    stacked: PropTypes.bool
  }

  static defaultProps = {
    size: 'large',
    space: 10,
    stacked: false,
    labelProps: {},
    activityIndicatorStyle: {
      color: colors.tint
    }
  }

  render() {
    const {
      style,
      activityIndicatorStyle,
      large,
      children,
      stacked,
      space,
      labelProps
    } = this.props

    const activitySize = large ? 'large' : 'small'

    // TODO: implement and use mapStyleToProp
    const flat = StyleSheet.flatten(activityIndicatorStyle)
    const tintColor = flat.color
    delete flat.color

    // Default is no label
    let activity = (
      <ActivityIndicator
        size={activitySize}
        color={tintColor}
        style={flat} />
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

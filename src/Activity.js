import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ActivityIndicator} from 'react-native'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'
import Label from './Label'

class Activity extends Component {

  static styleOptions = ({compile}) => {
    return {
      defaultStyles: [compile({flex: 1, backgroundColor: 'transparent'})],
      mapPropsToStyleObject: {
        activityIndicator: []
      }
    }
  }

  static propTypes = {
    labelProps: PropTypes.object,
    size: PropTypes.oneOf(['small', 'large']),
    tint: PropTypes.string,
    space: PropTypes.number,
    stacked: PropTypes.bool
  }

  static defaultProps = {
    size: 'large',
    //tint: Colors.tint,
    space: 10,
    stacked: false,
    labelProps: {}
  }

  render() {
    const {
      style,
      activityIndicatorStyle,
      size,
      tint,
      children,
      stacked,
      space,
      labelProps
    } = this.props

    // Default is not label
    let activity = (
      <ActivityIndicator
        size={size}
        color={tint}
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
        <Layout direction='row' center style={style}>
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

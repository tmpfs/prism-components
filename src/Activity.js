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
    // TODO: rename this so we can use `size` for `fontSize`
    large: PropTypes.bool,
    tint: PropTypes.string,
    space: PropTypes.number,
    stacked: PropTypes.bool
  }

  static defaultProps = {
    size: 'large',
    //tint: Colors.tint,
    tint: 'white',
    space: 10,
    stacked: false,
    labelProps: {}
  }

  render() {
    const {
      style,
      activityIndicatorStyle,
      large,
      tint,
      children,
      stacked,
      space,
      labelProps
    } = this.props

    const activitySize = large ? 'large' : 'small'

    // Default is not label
    // TODO: fix the need to add flex: 0 here
    // TODO: activityIndicatorStyle is inheriting flex: 1 from the defaultStyles
    let activity = (
      <ActivityIndicator
        size={activitySize}
        color={tint}
        style={activityIndicatorStyle.concat({flex: 0})} />
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

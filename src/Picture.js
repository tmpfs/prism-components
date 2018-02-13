import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {Image} from 'react-native-prism-primitives'

import namespace from './namespace'
import Layout from './Layout'
import Activity from './Activity'

class Picture extends Component {

  static styleName = 'Picture'

  static styleOptions = () => {
    return {
      supportsDimension: true,
      mapPropsToStyle: {
        activityStyle: {},
        imageStyle: {
          width: ({prop}) => prop,
          height: ({prop}) => prop
        },
        width: ({prop}) => prop,
        height: ({prop}) => prop
      }
    }
  }

  static propTypes = {
    source: Image.propTypes.source,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  state = {
    loading: false
  }

  setNativeProps (props) {
    this.refs.image.setNativeProps(props)
  }

  render() {
    const {style, activityStyle, imageStyle, width, height} = this.props

    let {source} = this.props

    let onLoadStart
    let onLoadEnd
    let activity = null

    if (this.state.loading) {
      activity = (
        <Activity style={activityStyle} />
      )
    }

    // Embedded `require()` resolves to a number
    // show preloader for all other sources
    if (typeof(source) !== 'number') {
      onLoadStart = () => {
        this.setState({loading: true})
      }
      onLoadEnd = () => {
        this.setState({loading: false})
      }
    }

    const handlers = {
      onLoadStart,
      onLoadEnd
    }

    return (
      <Layout center justify='center' flex={0} style={style}>
        <Image
          ref='image'
          width={width}
          height={height}
          {...handlers}
          style={imageStyle}
          source={source} />
        {activity}
      </Layout>
    )
  }
}

export default Prism(Picture, {namespace})

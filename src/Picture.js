import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {Image} from 'react-native-prism-primitives'

import Namespace from './Namespace'
import Layout from './Layout'
import Activity from './Activity'

class Picture extends Component {

  static mapPropsToStyleObject = {
    activity: [],
    image: []
  }

  static propTypes = {
    source: Image.propTypes.source,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    imageStyle: {
      position: 'absolute'
    }
  }

  state = {
    loading: false
  }

  setNativeProps (props) {
    this.refs.image.setNativeProps(props)
  }

  render() {
    const {style, activityStyle, imageStyle, width, height} = this.props

    // FIXME: MODIFYING STYLES IN RENDER
    const dimensions = {width, height}
    style.push(dimensions)
    imageStyle.push(dimensions)

    let {source} = this.props

    let onLoadStart
    let onLoadEnd
    let activity = null

    if (this.state.loading) {
      activity = (
        <Activity flex={0} style={activityStyle} />
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
      <Layout center={true} flex={0} style={dimensions}>
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

export default Prism(Picture, Namespace)

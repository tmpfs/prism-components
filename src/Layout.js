import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism, StyleRegistry} from 'react-native-prism'
import {View} from 'react-native-prism-primitives'
import namespace from './namespace'

import theme from './theme'

// Configure the library style registry
const registry = new StyleRegistry({theme, bundle: true})

class Layout extends Component {
  static styleOptions = () => {
    return {
      registry: registry,
      supportsDimension: true,
      mapPropsToStyle: {
        center: ({prop}) => {
          if (prop) {
            return {alignItems: 'center'}
          }
        },
        start: ({prop}) => {
          if (prop) {
            return {alignItems: 'flex-start'}
          }
        },
        end: ({prop}) => {
          if (prop) {
            return {alignItems: 'flex-end'}
          }
        }
      }
    }
  }

  static propTypes = {
    center: PropTypes.bool,
    start: PropTypes.bool,
    end: PropTypes.bool
  }

  render() {
    const {style} = this.props
    return (
      <View style={style}>{this.props.children}</View>
    )
  }
}

const requirements = ({config}) => {
  if (config.extendedProperties !== true) {
    return `extendedProperties must be set in config ` +
      `to use the ${namespace} component library`
  }
}

export default Prism(Layout, {namespace, requirements})

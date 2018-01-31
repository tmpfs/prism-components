import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {View} from 'react-native-prism-primitives'
import Namespace from './Namespace'

class Layout extends Component {
  static styleOptions = ({compile}) => {
    return {
      defaultStyles: [compile({flex: 1, backgroundColor: 'transparent'})],
      mapPropsToStyle: {
        center: ({prop}) => {
          return {alignItems: 'center', justifyContent: 'center'}
        },
        start: ({prop}) => {
          return {alignItems: 'flex-start'}
        },
        end: ({prop}) => {
          return {alignItems: 'flex-end'}
        },
        row: ({prop}) => {
          return {flexDirection: 'row'}
        },
        space: ({prop, props}) => {
          if (prop) {
            const vertical = !props.styleFlexRow
            const styleProp = vertical ? 'marginBottom' : 'marginRight'
            const spacer = {}
            spacer[styleProp] = prop
            return spacer
          }
        }
      }
    }
  }

  static propTypes = {
    space: PropTypes.number,
    center: PropTypes.bool,
    start: PropTypes.bool,
    end: PropTypes.bool
  }

  static defaultProps = {
    space: 0
  }

  render() {
    const {style} = this.props
    return (
      <View style={style}>{this.props.children}</View>
    )
  }
}

export default Prism(Layout, Namespace)

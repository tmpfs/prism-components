import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View as NativeView} from 'react-native'
import {Prism} from 'react-native-prism'
import NameSpace from './NameSpace'

class View extends Component {
  static styleOptions = ({compile}) => {
    return {
      defaultStyles: [compile({flex: 1, backgroundColor: 'transparent'})],
      mapPropsToStyle: {
        center: ({prop}) => {
          if (prop) {
            return {alignItems: 'center', justifyContent: 'center'}
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
    space: 0,
    start: false,
    end: false
  }

  render() {
    const {style} = this.props
    return (
      <NativeView style={style}>{this.props.children}</NativeView>
    )
  }
}

export default Prism(View, NameSpace)

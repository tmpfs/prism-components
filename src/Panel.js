import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Layout from './Layout'
import Label from './Label'
import namespace from './namespace'

class Panel extends Component {

  static styleName = 'Panel'

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
        headerStyle: {},
        bodyStyle: {},
        labelStyle: {}
      }
    }
  }

  static propTypes = {
    label: PropTypes.string,
    layoutProps: PropTypes.object,
    labelProps: PropTypes.object,
    header: PropTypes.node
  }

  render () {
    const {styleSheet, style} = this.props
    let {
      headerText,
      labelProps,
      labelStyle,
      headerStyle,
      bodyStyle,
    } = this.props

    let {label, header, layoutProps} = this.props

    if (label && !header) {
      header = (
        <Label
          {...labelProps}
          style={labelStyle}>{label}</Label>
      )
    }

    return (
      <Layout {...layoutProps} style={style}>
        <Layout text={headerText} style={headerStyle}>
          {header}
        </Layout>
        <Layout style={bodyStyle}>
          {this.props.children}
        </Layout>
      </Layout>
    )
  }
}

export default Prism(Panel, {namespace})

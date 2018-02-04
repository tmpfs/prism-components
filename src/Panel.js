import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Layout from './Layout'
import Label from './Label'
import Namespace from './Namespace'

class Panel extends Component {

  static styleOptions = () => {
    return {
      mapPropsToComponent: {
        headerStyle: [],
        bodyStyle: [],
        labelStyle: []
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

export default Prism(Panel, Namespace)

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Prism} from 'react-native-prism'

import Layout from './Layout'
import Label from './Label'

class Panel extends Component {

  static propTypes = {
    space: PropTypes.number,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    labelStyle: Prism.propTypes.style,
    header: PropTypes.node,
    headerPadding: PropTypes.number,
    bodyPadding: PropTypes.number,
    headerStyle: Prism.propTypes.style,
    bodyStyle: Prism.propTypes.style
  }

  static defaultProps = {
    headerPadding: 10,
    bodyPadding: 20
  }

  render () {
    const {styleSheet, style} = this.props
    let {
      space,
      labelProps,
      labelStyle,
      headerStyle,
      headerPadding,
      bodyStyle,
      bodyPadding
    } = this.props

    const layoutProps = {space}

    headerStyle = [styleSheet.PanelHeader].concat(headerStyle)
    bodyStyle = [styleSheet.PanelBody].concat(bodyStyle)

    let {label, header} = this.props
    if (label && !header) {
      header = (
        <Label
          bold={true}
          {...labelProps}
          style={labelStyle}
          label={label} />
      )
    }
    return (
      <Layout {...layoutProps} style={style}>
        <Layout
          style={headerStyle}
          padding={headerPadding}>
          {header}
        </Layout>
        <Layout
          style={bodyStyle}
          padding={bodyPadding}>
          {this.props.children}
        </Layout>
      </Layout>
    )
  }
}

export default Prism(Panel)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import Namespace from './Namespace'
import Layout from './Layout'
import Paragraph from './Paragraph'

class Notice extends Component {

  static styleOptions = () => {
    return {
      mapPropsToStyleState: ({props}) => {
        if (props.error !== undefined) {
          return 'error'
        }
      },
      mapPropsToStyleObject: {
        label: ['color']
      }
    }
  }

  static propTypes = {
    error: PropTypes.bool
  }

  render () {
    const {
      style,
      error,
      labelStyle,
      labelProps
    } = this.props

    return (
      <Layout {...this.props} style={style}>
        <Paragraph
          {...labelProps}
          style={labelStyle}>
          {this.props.children}
        </Paragraph>
      </Layout>
    )
  }
}

export default Prism(Notice, Namespace)

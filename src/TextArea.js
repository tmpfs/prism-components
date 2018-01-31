import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {TextInput} from 'react-native-prism-primitives'
import Namespace from './Namespace'
import Layout from './Layout'

class TextArea extends Component {

  static styleOptions = () => {
    return {
      mapPropsToStyleObject: {
        background: []
      }
    }
  }

  static propTypes = {
    value: PropTypes.string,
    maxLength: PropTypes.number,
    numberOfLines: PropTypes.number,
    editable: PropTypes.bool,
    multiline: PropTypes.bool
  }

  static defaultProps = {
    numberOfLines: 4,
    editable: true,
    multiline: true
  }

  render() {
    const {style, backgroundStyle} = this.props
    return (
      <Layout style={backgroundStyle}>
        <TextInput
          underlineColorAndroid='transparent'
          autoGrow={false} {...this.props} style={style} />
      </Layout>
    )
  }
}

export default Prism(TextArea, Namespace)

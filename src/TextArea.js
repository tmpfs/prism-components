import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {TextInput} from 'react-native-prism-primitives'
import Namespace from './Namespace'

class TextArea extends Component {

  static styleOptions = () => {
    return {
      mapPropsToStyleState: ({props}) => {
        if (props.disabled) {
          return 'Disabled'
        }
      }
    }
  }

  static propTypes = {
    value: PropTypes.string,
    maxLength: PropTypes.number,
    numberOfLines: PropTypes.number,
    disabled: PropTypes.bool,
    editable: PropTypes.bool,
    multiline: PropTypes.bool
  }

  static defaultProps = {
    numberOfLines: 4,
    multiline: true
  }

  state = {
    disabled: false
  }

  componentWillMount () {
    const {disabled} = this.props
    this.setState({disabled})
  }

  render() {
    const {style, disabled} = this.props
    return (
      <TextInput
        underlineColorAndroid='transparent'
        {...this.props}
        editable={!this.state.disabled}
        style={style} />
    )
  }
}

export default Prism(TextArea, Namespace)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {TextInput} from 'react-native-prism-primitives'
import namespace from './namespace'

class TextArea extends Component {

  static styleName = 'TextArea'

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
        disabled: ({css, prop}) => {
          if (prop === true) {
            return css.pseudo('disabled')
          }
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

  focus () {
    this.refs.input.focus()
  }

  blur () {
    this.refs.input.blur()
  }

  render() {
    const {style, disabled} = this.props
    return (
      <TextInput
        ref='input'
        underlineColorAndroid='transparent'
        editable={!disabled}
        {...this.props}
        style={style} />
    )
  }
}

export default Prism(TextArea, {namespace})

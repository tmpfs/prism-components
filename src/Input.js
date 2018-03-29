import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {TextInput} from 'react-native-prism-primitives'
import namespace from './namespace'

class Input extends Component {

  static styleName = 'Input'

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
        disabled: ({css, prop}) => {
          if (prop === true) {
            return css.pseudo('disabled')
          }
        }
      },
      mapStyleToProps: {
        placeholderColor: ({prop}) => prop
      }
    }
  }

  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'tel',
      'number',
      'email',
      'password'
    ]),
    value: PropTypes.string,
    maxLength: PropTypes.number,
    numberOfLines: PropTypes.number,
    disabled: PropTypes.bool,
    focused: PropTypes.bool
  }

  static defaultProps = {
    type: 'text',
    numberOfLines: 1
  }

  state = {
    disabled: false
  }

  componentDidMount () {
    const {disabled, focused} = this.props
    //if (focused) {
      //this.refs.input.focus()
    //}
    this.setState({disabled})
  }

  render() {
    const {style, type, disabled, placeholderColor} = this.props

    let typeProps = {}
    switch (type) {
      case 'email':
        typeProps = {
          keyboardType: 'email-address'
        }
        break;
      case 'tel':
        typeProps = {
          keyboardType: 'phone-pad',
          returnKeyType: 'done'
        }
        break;
      case 'number':
        typeProps = {
          keyboardType: 'numeric'
        }
        break;
      case 'password':
        typeProps = {
          secureTextEntry: true
        }
        break;
    }

    return (
      <TextInput
        ref='input'
        underlineColorAndroid='transparent'
        editable={!disabled}
        placeholderTextColor={placeholderColor}
        {...this.props}
        {...typeProps}
        style={style} />
    )
  }
}

export default Prism(Input, {namespace})

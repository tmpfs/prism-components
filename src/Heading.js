import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Paragraph from './Paragraph'
import Namespace from './Namespace'

class Heading extends Component {

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
      }
    }
  }

  //static propTypes = {
    //label: PropTypes.string.isRequired,
    //size: PropTypes.oneOf(['small', 'medium', 'large']),
    //center: PropTypes.bool
  //}

  static defaultProps = {
    size: 22
  }

  render() {
    const {style} = this.props
    return (
      <Paragraph
        {...this.props}
        style={style}>
        {this.props.children}
      </Paragraph>
    )
  }
}

export default Prism(Heading, Namespace)

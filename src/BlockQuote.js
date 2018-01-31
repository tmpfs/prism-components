import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Paragraph from './Paragraph'
import Namespace from './Namespace'

class BlockQuote extends Component {
  static propTypes = {
    quote: PropTypes.bool
  }

  static defaultProps = {
    quote: true
  }

  render() {
    let {quote, children} = this.props
    if (quote && typeof(children) === 'string') {
      children = `"${children}"`
    }
    return (
      <Paragraph {...this.props}>
        {children}
      </Paragraph>
    )
  }
}

export default Prism(BlockQuote, Namespace)

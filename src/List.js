import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Iterator from './Iterator'

class List extends Component {

  static propTypes = {
    space: PropTypes.number,
    last: PropTypes.bool
  }

  static defaultProps = {
    space: 0,
    last: false
  }

  render() {
    const {
      style,
      space,
      last
    } = this.props
    const children = React.Children.toArray(this.props.children)
    const spacer = this.styleFlexRow ? {marginRight: space} : {marginBottom: space}
    const item = {style: spacer}
    return (
      <Iterator style={style} last={last} item={item}>
        {this.props.children}
      </Iterator>
    )
  }
}

export default Prism(List, Namespace)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import namespace from './namespace'
import Iterator from './Iterator'

class List extends Component {

  static styleName = 'List'

  static propTypes = {
    all: PropTypes.object,
    space: PropTypes.number,
    row: PropTypes.bool,
    last: PropTypes.bool
  }

  static defaultProps = {
    space: 0,
    last: false
  }

  render() {
    const {
      style,
      all,
      row,
      space,
      last
    } = this.props
    const children = React.Children.toArray(
      this.props.children)
    const spacer = row ?
      {marginRight: space} : {marginBottom: space}
    const item = {style: spacer}
    return (
      <Iterator style={style} row={row} all={all} last={last} item={item}>
        {this.props.children}
      </Iterator>
    )
  }
}

export default Prism(List, {namespace})

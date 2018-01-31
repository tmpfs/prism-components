import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'

class Iterator extends Component {

  static propTypes = {
    all: PropTypes.object,
    item: PropTypes.object,
    when: PropTypes.func,
    last: PropTypes.bool
  }

  static defaultProps = {
    all: {},
    item: {},
    last: true,
    first: true,
    when: (child, i, len, props) => {
      if (props.first === false && i === 0) {
        return false
      }
      if (props.last === false && (i === len - 1)) {
        return false
      }
      return true
    }
  }

  render() {
    const {
      style,
      all,
      row,
      item,
      when
    } = this.props
    const children = React.Children.toArray(this.props.children)
    return (
      <Layout row={row} style={style}>
      {
        children.map((child, i) => {
          let extraProps = Object.assign({}, all)
          if (when(child, i, children.length, this.props)) {
            extraProps = Object.assign(extraProps, item)
          }
          return React.cloneElement(child, extraProps)
        })
      }
      </Layout>
    )
  }
}

export default Prism(Iterator, Namespace)

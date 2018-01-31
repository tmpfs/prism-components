import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'

class Iterator extends Component {

  static propTypes = {
    item: PropTypes.object,
    when: PropTypes.func,
    last: PropTypes.bool
  }

  static defaultProps = {
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
      item,
      when
    } = this.props
    const children = React.Children.toArray(this.props.children)
    return (
      <Layout style={style}>
      {
        children.map((child, i) => {
          if (!when(child, i, children.length, this.props)) {
            return React.cloneElement(child)
          }
          return React.cloneElement(child, item)
        })
      }
      </Layout>
    )
  }
}

export default Prism(Iterator, Namespace)

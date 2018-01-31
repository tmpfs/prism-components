import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'
import Label from './Label'

class BulletList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    number: PropTypes.bool,
    justify: PropTypes.string,
    bold: PropTypes.bool,
    color: PropTypes.string,
    bulletColor: PropTypes.string,
    labelColor: PropTypes.string,
  }

  static defaultProps = {
    number: false,
    bold: false,
    justify: 'start',
    color: '#999999'
  }

  render() {
    const {
      items,
      justify,
      padding,
      number,
      color,
      bold,
      bulletColor,
      labelColor
    } = this.props
    return (
      <Layout padding={padding}>
      {
        items.map((label, i) => {
          return (
            <Layout key={i} direction='row' justify={justify}>
              <Label
                style={{color: bulletColor || color, paddingBottom: number ? 0 : 5}}>
                {number ? (i + 1).toString() + '.' : '\u2022'}
              </Label>
              <Label
                bold={bold}
                color={labelColor || color}
                style={{paddingLeft: 5}}>
                {label}
              </Label>
            </Layout>
          )
        })
      }
      </Layout>
    )
  }
}

export default Prism(BulletList, Namespace)

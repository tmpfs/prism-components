import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'
import Label from './Label'
import List from './List'

class BulletList extends Component {

  static styleOptions = () => {
    return {
      mapPropsToStyleObject: {
        bullet: ['color'],
        label: ['color']
      }
    }
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    numerical: PropTypes.bool,
    space: PropTypes.number,
    justify: PropTypes.string,
    row: PropTypes.bool,
    bold: PropTypes.bool,
    color: PropTypes.string,
    bulletColor: PropTypes.string,
    labelColor: PropTypes.string,
  }

  static defaultProps = {
    justify: 'start',
    space: 5,
    row: false
  }

  render() {
    const {
      style,
      space,
      row,
      items,
      justify,
      numerical,
      color,
      bold,
      bulletColor,
      labelColor,
      bulletStyle,
      labelStyle
    } = this.props

    return (
      <List row={row} space={space}>
      {
        items.map((label, i) => {
          return (
            <Layout key={i} row justify={justify}>
              <Label
                color={bulletColor || color}
                style={bulletStyle}>
                {numerical ? (i + 1).toString() + '.' : '\u2022'}
              </Label>
              <Label
                bold={bold}
                color={labelColor || color}
                style={labelStyle}>
                {label}
              </Label>
            </Layout>
          )
        })
      }
      </List>
    )
  }
}

export default Prism(BulletList, Namespace)

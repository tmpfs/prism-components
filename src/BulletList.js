import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Namespace from './Namespace'
import Layout from './Layout'
import Label from './Label'

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
    bold: PropTypes.bool,
    color: PropTypes.string,
    bulletColor: PropTypes.string,
    labelColor: PropTypes.string,
  }

  static defaultProps = {
    number: false,
    bold: false,
    justify: 'start',
    space: 5
  }

  render() {
    const {
      style,
      space,
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

    // TODO: restore `style`
    return (
      <Layout>
      {
        // TODO: use Iterator and apply space to all but the last element
        items.map((label, i) => {
          return (
            <Layout key={i} direction='row' justify={justify} style={{marginBottom: space}}>
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
      </Layout>
    )
  }
}

export default Prism(BulletList, Namespace)

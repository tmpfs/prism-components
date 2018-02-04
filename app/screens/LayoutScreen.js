import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import ScreenRenderer from './ScreenRenderer'

import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Layout from '../../src/Layout'
import theme from '../../src/theme'
const {colors} = theme

const CenterStyle = {
  width: 50,
  height: 50,
  flex: 0,
  backgroundColor: colors.background
}

class Rectangle extends Component {

  static styleOptions = () => {
    return {
      supportsDimension: true
    }
  }

  static defaultProps = {
    style: {
      flex: 0,
      width: 20,
      height: 20,
      backgroundColor: colors.cream
    }
  }

  render () {
    const {style} = this.props
    return (
      <Layout style={style} />
    )
  }
}

const Square = Prism(Rectangle)

class LayoutScreen extends ScreenRenderer {
  static title = 'Layout'
  static navigationOptions = {
    header: BackNavigationHeader(LayoutScreen.title)
  }
  list = [
    {
      label: 'Layout Split',
      component: (
        <Layout style={{height: 150}}>
          <Layout background='steelblue' />
          <Layout background='powderblue' />
        </Layout>
      )
    },
    {
      label: 'Layout Row',
      component: (
        <Layout row style={{height: 150}}>
          <Layout background='steelblue' />
          <Layout background='powderblue' />
        </Layout>
      )
    },
    {
      label: 'Layout (Third)',
      component: (
        <Layout style={{height: 150}}>
          <Layout background='steelblue'  />
          <Layout background='powderblue' />
          <Layout background='skyblue' />
        </Layout>
      )
    },
    {
      label: 'Layout (Mixed)',
      component: (
        <Layout style={{height: 150}}>
          <Layout flex={.5} background='steelblue'  />
          <Layout flex={.3} background='powderblue' />
          <Layout flex={.25} background='skyblue' />
          <Layout flex={.1} background='cream' />
        </Layout>
      )
    },
    {
      label: 'Center',
      component: (
        <Layout row justify='between'>
          <Layout
            center={true}
            start={true}
            style={CenterStyle}>
            <Square />
          </Layout>
          <Layout
            center={true}
            style={CenterStyle}>
            <Square />
          </Layout>
          <Layout
            center={true}
            end={true}
            style={CenterStyle}>
            <Square />
          </Layout>
        </Layout>
      )
    },
    {
      label: 'Center Justify',
      component: (
        <List space={30}>
          <Layout row justify='between'>
            <Layout
              center={true}
              start={true}
              justify='start'
              style={CenterStyle}>
              <Square />
            </Layout>
            <Layout
              center={true}
              justify='start'
              style={CenterStyle}>
              <Square />
            </Layout>
            <Layout
              center={true}
              end={true}
              justify='start'
              style={CenterStyle}>
              <Square />
            </Layout>
          </Layout>
          <Layout row justify='between'>
            <Layout
              center={true}
              start={true}
              justify='end'
              style={CenterStyle}>
              <Square />
            </Layout>
            <Layout
              center={true}
              justify='end'
              style={CenterStyle}>
              <Square />
            </Layout>
            <Layout
              center={true}
              end={true}
              justify='end'
              style={CenterStyle}>
              <Square />
            </Layout>
          </Layout>
        </List>
      )
    },
    {
      label: 'Row',
      component: (
        <Layout>
          <Layout space={30}>
            <Layout row>
              <Square margin={5} />
              <Square margin={5} />
              <Square margin={5} />
            </Layout>
          </Layout>
          <Layout space={30}>
            <Layout row justify='center'>
              <Square margin={5} />
              <Square margin={5} />
              <Square margin={5} />
            </Layout>
          </Layout>
          <Layout row justify='end'>
            <Square margin={5} />
            <Square margin={5} />
            <Square margin={5} />
          </Layout>
        </Layout>
      )
    },
    {
      label: 'Row (Between)',
      component: (
        <Layout row justify='between'>
          <Square />
          <Square />
          <Square />
        </Layout>
      )
    },
    {
      label: 'Row (Around)',
      component: (
        <Layout row justify='around'>
          <Square />
          <Square />
          <Square />
        </Layout>
      )
    },
  ]
}

export default LayoutScreen

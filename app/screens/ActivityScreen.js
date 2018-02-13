import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import Layout from '../../src/Layout'
import Activity from '../../src/Activity'

const copy = `LOADING`

class ActivityScreen extends ScreenRenderer {
  static title = 'Activity'
  static navigationOptions = {
    name: 'ActivityScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Simple',
      component: (
        <Layout row>
          <Layout center>
            <Activity large />
          </Layout>
          <Layout center>
            <Activity />
          </Layout>
        </Layout>
      )
    },
    {
      label: 'Label',
      component: (
        <Layout row>
          <Activity large>
            {copy}
          </Activity>
          <Activity>
            {copy}
          </Activity>
        </Layout>
      )
    },
    {
      label: 'Stacked',
      component: (
        <Layout row>
          <Activity stacked large>
            {copy}
          </Activity>
          <Activity stacked>
            {copy}
          </Activity>
        </Layout>
      )
    }
  ]
}

export default ActivityScreen

import React, {Component} from 'react'
import {Platform} from 'react-native'

import ScrollPane from '../src/ScrollPane'
import Layout from '../src/Layout'
import List from '../src/List'
import ListItem from '../src/ListItem'

import LogoType from './LogoType'
import ActivityScreen from './screens/ActivityScreen'
import HeadingScreen from './screens/HeadingScreen'
import LabelScreen from './screens/LabelScreen'
import ParagraphScreen from './screens/ParagraphScreen'

const Categories = [
  ActivityScreen,
  HeadingScreen,
  LabelScreen,
  ParagraphScreen
]

class Index extends Component {

  static navigationOptions = {
    title: 'Prism Components',
    headerStyle: {display: 'none'}
  }

  render () {
    return (
      <ScrollPane>
        <LogoType />
        <List padding={[0, 20]} space={1}>
          {
            Categories.map((item, i) => {
              //console.log(item.name)
              return (
                <Layout key={i}>
                  <ListItem
                    onPress={
                      () => {
                        this.props.navigation.navigate(item.name)
                      }
                    }
                    >
                    {item.title}
                  </ListItem>
                </Layout>
              )
            })
          }
        </List>
      </ScrollPane>
    )
  }
}

export {Index, Categories}

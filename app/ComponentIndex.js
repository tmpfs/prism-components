import React, {Component} from 'react'
import {Platform} from 'react-native'

import ScrollPane from '../src/ScrollPane'
import Layout from '../src/Layout'
import List from '../src/List'
import ListItem from '../src/ListItem'

import LogoType from './LogoType'
import ExperimentalScreen from './screens/ExperimentalScreen'
import LayoutScreen from './screens/LayoutScreen'
import ActivityScreen from './screens/ActivityScreen'
import ButtonScreen from './screens/ButtonScreen'
import HeadingScreen from './screens/HeadingScreen'
import LabelScreen from './screens/LabelScreen'
import ParagraphScreen from './screens/ParagraphScreen'
import TextAreaScreen from './screens/TextAreaScreen'
import BlockQuoteScreen from './screens/BlockQuoteScreen'
import NumberStackScreen from './screens/NumberStackScreen'
import NoticeScreen from './screens/NoticeScreen'
import BulletListScreen from './screens/BulletListScreen'
import ListScreen from './screens/ListScreen'
import PictureScreen from './screens/PictureScreen'

const Categories = [
  ExperimentalScreen,
  LayoutScreen,
  LabelScreen,
  PictureScreen,
  HeadingScreen,
  ParagraphScreen,
  TextAreaScreen,
  ButtonScreen,
  BlockQuoteScreen,
  NumberStackScreen,
  NoticeScreen,
  BulletListScreen,
  ListScreen,
  ActivityScreen,
]

class Index extends Component {

  static navigationOptions = {
    headerStyle: {display: 'none'}
  }

  render () {
    return (
      <ScrollPane>
        <LogoType />
        <List padding={[0, 20]} space={1} margin={{bottom: 20}}>
          {
            Categories.map((item, i) => {
              const {name} = item.navigationOptions
              return (
                <Layout key={i}>
                  <ListItem
                    onPress={
                      () => {
                        this.props.navigation.navigate(name)
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

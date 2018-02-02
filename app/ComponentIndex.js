import React, {Component} from 'react'
import {Platform} from 'react-native'

import ScrollPane from '../src/ScrollPane'
import Layout from '../src/Layout'
import List from '../src/List'
import ListItem from '../src/ListItem'

import LogoType from './LogoType'
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

const Categories = [
  ActivityScreen,
  ButtonScreen,
  HeadingScreen,
  LabelScreen,
  ParagraphScreen,
  TextAreaScreen,
  BlockQuoteScreen,
  NumberStackScreen,
  NoticeScreen,
  BulletListScreen,
  ListScreen,
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

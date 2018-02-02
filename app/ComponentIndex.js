import React, {Component} from 'react'
import {Platform} from 'react-native'

import ScrollPane from '../src/ScrollPane'
import Layout from '../src/Layout'
import ListItem from '../src/ListItem'

import LabelScreen from './screens/LabelScreen'
import ParagraphScreen from './screens/ParagraphScreen'

const Categories = [
  LabelScreen,
  ParagraphScreen
]

import Colors from './Colors'
import Fonts from './Fonts'

const styles = {
  header: {
    backgroundColor: Colors.background
  },
  headerTitle: {
    fontFamily: Fonts.regular(Platform.OS),
    // NOTE: must reset the font weight
    fontWeight: 'normal',
    color: Colors.cream,
    fontSize: 18,
  }
}

class Index extends Component {
  static navigationOptions = {
    title: 'Prism Components',
    // NOTE: we use styles rather than a custom JSX element
    // NOTE: as the behaviour is not so good on android using `header`
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  }
  render () {
    return (
      <ScrollPane>
        {
          Categories.map((item, i) => {
            console.log(item.name)
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
      </ScrollPane>
    )
  }
}

export {Index, Categories}

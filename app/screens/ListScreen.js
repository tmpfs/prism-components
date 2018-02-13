import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import ListItem from '../../src/ListItem'

class ListScreen extends ScreenRenderer {
  static title = 'List Menu'
  static navigationOptions = {
    name: 'ListScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Menu',
      component: (
        <List>
          <ListItem>Menu Item 1</ListItem>
          <ListItem>Menu Item 2</ListItem>
          <ListItem>Menu Item 3</ListItem>
        </List>
      )
    },
    {
      label: 'Navigation',
      component: (
        <List row justify='between'>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      )
    },
    {
      label: 'Space',
      component: (
        <List space={5}>
          <ListItem>Menu Item 1</ListItem>
          <ListItem>Menu Item 2</ListItem>
          <ListItem>Menu Item 3</ListItem>
        </List>
      )
    },
    //{
      //label: 'Navigation Space',
      //component: (
        //<List space={5} row justify='between'>
          //<ListItem>Item 1</ListItem>
          //<ListItem>Item 2</ListItem>
          //<ListItem>Item 3</ListItem>
        //</List>
      //)
    //}
  ]
}

export default ListScreen

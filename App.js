import React, {Component} from 'react'
import {Prism, StyleRegistry} from 'react-native-prism'

import {
  Activity,
  BlockQuote,
  BulletList,
  Citation,
  Heading,
  Label,
  Layout,
  List,
  ListItem,
  Notice,
  Panel,
  Paragraph,
  ScrollPane,
  TextArea,
  TouchButton as Button
} from './src'

import Colors from './app/Colors'
import Fonts from './app/Fonts'
import StyleSheet from './app/StyleSheet'

const registry = new StyleRegistry()
registry.addColors(Colors)
registry.addFonts(Fonts)
registry.addStyleSheet(StyleSheet)
Prism.configure(
  registry,
  {
    debug: true,
    extendedProperties: true
  }
)

const image = 'https://raw.githubusercontent.com/fika-community/prism/master/prism.png'

export default class App extends Component<{}> {
  render () {
    return (
      <Layout background='background'>
        <ScrollPane>
          <Layout
            margin={20}
            padding={10}>
            <Heading align='center'>Prism</Heading>
          </Layout>

          <List space={30}>
            <Panel
              label='Text Area'>
              <List space={30}>
                <TextArea>This is some default text</TextArea>
              </List>
            </Panel>

            <Panel
              label='List Menu'>
              <List>
                <ListItem>Menu Item 1</ListItem>
                <ListItem>Menu Item 2</ListItem>
                <ListItem>Menu Item 3</ListItem>
              </List>
            </Panel>

            <Panel
              label='Button'>
              <List space={10}>
                <Button>Touch Me</Button>
                <Button disabled>Touch Me</Button>
              </List>
            </Panel>
            <Panel
              label='Notice'>
              <List space={10}>
                <Notice>
                  Minimal, idiomatic style management for React Native.
                </Notice>
                <Notice error={true}>
                  Minimal, idiomatic style management for React Native.
                </Notice>
              </List>
            </Panel>
            <Panel
              label='Label'>
              <Label>
                Minimal, idiomatic style management for React Native.
              </Label>
            </Panel>
            <Panel
              label='Paragraph'>
              <Paragraph>
                Minimal, idiomatic style management for React Native.
              </Paragraph>
            </Panel>
            <Panel
              label='Block Quote'>
              <BlockQuote>
                Minimal, idiomatic style management for React Native.
              </BlockQuote>
              <Citation>Muji 2018</Citation>
            </Panel>
            <Panel
              label='Unordered List'>
              <BulletList items={['Go', 'Rust', 'Javascript']} />
            </Panel>
            <Panel
              label='Ordered List'>
              <BulletList
                numerical={true}
                items={['Document', 'Test', 'Iterate']} />
            </Panel>
            <Panel
              label='Activity'>
              <List
                space={20}
                all={{
                  row: true,
                  padding: [10],
                  background: 'dodgerblue',
                  radius: 5}}
                >
                <Layout>
                  <Layout center>
                    <Activity large />
                  </Layout>
                  <Layout center>
                    <Activity />
                  </Layout>
                </Layout>
                <Layout>
                  <Activity stacked large>
                    LOADING
                  </Activity>
                  <Activity stacked>
                    LOADING
                  </Activity>
                </Layout>
                <Layout>
                  <Activity large>
                    LOADING
                  </Activity>
                  <Activity>
                    LOADING
                  </Activity>
                </Layout>
              </List>
            </Panel>

          </List>
        </ScrollPane>
      </Layout>
    )
  }
}

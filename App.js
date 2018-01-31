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
  Paragraph,
  Panel,
  ScrollPane
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
          <Layout>
            <Layout
              margin={20}
              padding={10}>
              <Heading align='center'>Prism</Heading>
            </Layout>
            <Panel
              space={30}
              label='Label'>
              <Label>
                Minimal, idiomatic style management for React Native.
              </Label>
            </Panel>
            <Panel
              space={30}
              label='Paragraph'>
              <Paragraph>
                Minimal, idiomatic style management for React Native.
              </Paragraph>
            </Panel>
            <Panel
              space={30}
              label='Block Quote'>
              <BlockQuote>
                Minimal, idiomatic style management for React Native.
              </BlockQuote>
              <Citation>Muji 2018</Citation>
            </Panel>
            <Panel
              space={30}
              label='Unordered List'>
              <BulletList items={['Go', 'Rust', 'Javascript']} />
            </Panel>
            <Panel
              space={30}
              label='Ordered List'>
              <BulletList numerical={true} items={['Document', 'Test', 'Iterate']} />
            </Panel>
            <Panel
              space={30}
              label='Activity'>
              <Layout direction='row'>
                <Activity />
                <Activity size='small' />
              </Layout>
            </Panel>
            <Panel
              space={30}
              label='Activity Label'>
              <Layout direction='row'>
                <Activity>
                  LOADING
                </Activity>
                <Activity size='small'>
                  LOADING
                </Activity>
              </Layout>
            </Panel>
            <Panel
              space={30}
              label='Activity Stacked'>
              <Layout direction='row'>
                <Activity stacked>
                  LOADING
                </Activity>
                <Activity stacked size='small'>
                  LOADING
                </Activity>
              </Layout>
            </Panel>
          </Layout>
        </ScrollPane>
      </Layout>
    )
  }
}

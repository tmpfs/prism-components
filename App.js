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
  Notice,
  Panel,
  Paragraph,
  ScrollPane,
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
          <Layout>
            <Layout
              margin={20}
              padding={10}>
              <Heading align='center'>Prism</Heading>
            </Layout>
            <Panel
              space={30}
              label='Button'>
              <Button>Touch Me</Button>
              <Button disabled>Touch Me</Button>
            </Panel>
            <Panel
              space={30}
              label='Notice'>
              <Notice space={10}>
                Minimal, idiomatic style management for React Native.
              </Notice>
              <Notice error={true}>
                Minimal, idiomatic style management for React Native.
              </Notice>
            </Panel>
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
              <Layout row radius={5} padding={[10]} space={20} background='dodgerblue'>
                <Layout center>
                  <Activity large />
                </Layout>
                <Layout center>
                  <Activity />
                </Layout>
              </Layout>
              <Layout row radius={5} padding={[10]} space={20} background='dodgerblue'>
                <Activity stacked large>
                  LOADING
                </Activity>
                <Activity stacked>
                  LOADING
                </Activity>
              </Layout>
              <Layout row radius={5} padding={[10]} background='dodgerblue'>
                <Activity large>
                  LOADING
                </Activity>
                <Activity>
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

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
  NumberStack,
  Panel,
  Paragraph,
  Picture,
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

    //<Layout font={{size:'xx-large', color: 'red'}}>
      //<Layout>
        //<Panel label='Foo'>
          //<Label font={{color: 'green'}}>Some context text</Label>
        //</Panel>
      //</Layout>
    //</Layout>


const image = 'https://raw.githubusercontent.com/fika-community/prism/master/prism.png'

export default class App extends Component<{}> {
  render () {
    return (
      <Layout background='background'>
        <ScrollPane>
          <Layout
            center
            margin={20}
            padding={10}>
            <Picture
              width={128}
              height={128}
              source={{uri: image}}
            />
            <Heading font={{size: 'large'}}>Prism</Heading>
          </Layout>

          <List space={30}>
            <Panel
              label='Heading'>

              <List>
                <Heading font={{size: 'xx-small'}}>
                  Heading
                </Heading>
                <Heading font={{size: 'x-small'}}>
                  Heading
                </Heading>
                <Heading font={{size: 'small'}}>
                  Heading
                </Heading>
                <Heading font={{size: 'medium'}}>
                  Heading
                </Heading>
                <Heading font={{size: 'large'}}>
                  Heading
                </Heading>
                <Heading font={{size: 'x-large'}}>
                  Heading
                </Heading>
                <Heading font={{size: 'xx-large'}}>
                  Heading
                </Heading>
              </List>
            </Panel>
            <Panel
              label='Label'>
              <List space={5}>
                <Label font={{size: 'xx-small'}}>
                  Minimal, idiomatic style management for React Native.
                </Label>
                <Label font={{size: 'x-small'}}>
                  Minimal, idiomatic style management for React Native.
                </Label>
                <Label font={{size: 'small'}}>
                  Minimal, idiomatic style management for React Native.
                </Label>
                <Label font={{size: 'medium'}}>
                  Minimal, idiomatic style management for React Native.
                </Label>
                <Label font={{size: 'large'}}>
                  Minimal, idiomatic style management for React Native.
                </Label>
                <Label font={{size: 'x-large'}}>
                  Minimal, idiomatic style management for React Native.
                </Label>
                <Label font={{size: 'xx-large'}}>
                  Minimal, idiomatic style management for React Native.
                </Label>
              </List>
            </Panel>
            <Panel
              label='Paragraph'>
              <List space={5}>
                <Paragraph font={{size: 'xx-small'}}>
                  Minimal, idiomatic style management for React Native.
                </Paragraph>
                <Paragraph font={{size: 'x-small'}}>
                  Minimal, idiomatic style management for React Native.
                </Paragraph>
                <Paragraph font={{size: 'small'}}>
                  Minimal, idiomatic style management for React Native.
                </Paragraph>
                <Paragraph font={{size: 'medium'}}>
                  Minimal, idiomatic style management for React Native.
                </Paragraph>
                <Paragraph font={{size: 'large'}}>
                  Minimal, idiomatic style management for React Native.
                </Paragraph>
                <Paragraph font={{size: 'x-large'}}>
                  Minimal, idiomatic style management for React Native.
                </Paragraph>
                <Paragraph font={{size: 'xx-large'}}>
                  Minimal, idiomatic style management for React Native.
                </Paragraph>
              </List>

            </Panel>
            <Panel
              label='Number Stack'>
              <List space={30} all={{row: true}}>
                <List all={{size: 'large', color: 'background'}}>
                  <NumberStack align='left' value={3}>Statistic</NumberStack>
                  <NumberStack value={7}>Statistic</NumberStack>
                  <NumberStack align='right' value={42}>Statistic</NumberStack>
                </List>
                <List all={{size: 'medium', color: 'skyblue'}}>
                  <NumberStack align='left' value={3}>Magic Number is 3</NumberStack>
                  <NumberStack value={7}>Magic Number is 7</NumberStack>
                  <NumberStack align='right' value={42}>Magic Number is 42</NumberStack>
                </List>
                <List all={{size: 'small', color: 'powderblue'}}>
                  <NumberStack align='left' value={3}>Magic</NumberStack>
                  <NumberStack value={7}>Magic</NumberStack>
                  <NumberStack align='right' value={42}>Magic</NumberStack>
                </List>
              </List>
            </Panel>

            <Panel
              label='Text Area'>
              <List space={30}>
                <TextArea>Enter your comment</TextArea>
                <TextArea disabled>Do something before editing</TextArea>
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
                <Notice error>
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

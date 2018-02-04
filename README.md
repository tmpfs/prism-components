<h1 align="center">Prism Components</h1>
<p align="center">Component library for <a href="https://github.com/fika-community/prism"title="Prism">Prism</a></p>
<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/fika-community/prism/master/prism.png" />
</p>

---

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Getting Started](#getting-started)
- [Component Styles](#component-styles)
- [License](#license)

---

## Installation

Use your preferred package manager for installation.

```
npm i --save react-native-prism-components
yarn add react-native-prism-components
```

## Synopsis

Component library for [Prism](https://github.com/fika-community/prism) using the namespace `com.prism.ui`.

This library extends the [Prism Primitives](https://github.com/fika-community/prism#properties) library, re-exporting all the underlying primitive components so you have a clear upgrade path if you want to use this library.

```javascript
import {
  View,
  Label,
  Heading,
  Panel
} from 'react-native-prism-components'
```

## Getting Started

Configure your application (see the Prism [Getting Started](https://github.com/fika-community/prism#getting-started) guide) and then you can import the components from `react-native-prism-components` to use them in your application.

## Component Styles

These are the component styles bundled with the library for reference, override them in your application styles.

```javascript
export default {
  colors: {
    cream: '#fdfbdf',
    background: 'steelblue',
    backgroundLight: 'powderblue',
    backgroundDark: '#336699',
    tint: '#5affda'
  },
  fonts: {
    regular: 'WorkSans-Regular',
    medium: 'WorkSans-Medium'
  },
  styles: ({colors, fonts}) => {
    return {
      'View': {
        backgroundColor: 'transparent'
      },
      'Text': {
        fontSize: 16,
        color: colors.cream
      },
      'TextInput': {
        fontSize: 16,
        color: colors.cream
      },
      'com.prism.ui.Layout': {
        flex: 1
      },
      'com.prism.ui.Label': {
        fontFamily: fonts.regular,
        fontSize: 18,
        //color: colors.cream
      },
      'com.prism.ui.Paragraph': {},
      'com.prism.ui.ScrollPane': {
        flex: 1,
        //padding: 20
      },
      'com.prism.ui.Panel.Header': {
        backgroundColor: '#336699',
        paddingVertical: 10,
        paddingHorizontal: 20,
        textTransform: 'uppercase'
      },
      'com.prism.ui.Panel.Body': {
        backgroundColor: '#335599',
        padding: 20
      },
      'com.prism.ui.BulletList': {
        color: colors.cream
      },
      'com.prism.ui.BulletList.Bullet': {
        marginRight: 5
      },
      'com.prism.ui.BackNavigation': {
        flex: 0,
        backgroundColor: colors.backgroundDark
      },
      'com.prism.ui.BackLink': {
        flexDirection: 'row',
        width: '100%',
        //alignContent: 'center',
        alignItems: 'flex-start',
        padding: 12,
      },

      'com.prism.ui.BackLink.Image': {
        marginRight: 15,
        tintColor: colors.cream
      },

      'com.prism.ui.BackLink.Label': {
        fontFamily: fonts.regular,
        // NOTE: must reset the font weight
        fontWeight: 'normal',
        color: colors.cream,
        fontSize: 18,
      },

      'com.prism.ui.Notice': {
        padding: 10,
        borderRadius: 2,
        backgroundColor: '#336699',
      },
      'com.prism.ui.Notice.Label': {
        color: colors.cream,
        fontSize: 15
      },
      'com.prism.ui.Notice:error': {
        backgroundColor: 'red',
      },
      'com.prism.ui.Notice.Label:error': {
        color: colors.cream
      },
      'com.prism.ui.Button': {
        fontSize: 18,
        paddingTop: 12,
        backgroundColor: 'steelblue',
        borderRadius: 4,
        overflow: 'hidden',
        textAlign: 'center',
        height: 45,
        width: '100%'
      },
      'com.prism.ui.Button:disabled': {
        //backgroundColor: 'rgba(248, 231, 29, 1.0)',
        //opacity: 0.2
      },
      'com.prism.ui.List': {},
      'com.prism.ui.ListItem': {
        backgroundColor: colors.backgroundDark,
        textAlign: 'left',
        borderRadius: 0,
        paddingHorizontal: 12,
        height: 45
      },
      'com.prism.ui.TextArea': {
        textAlignVertical: 'top',
        height: 100,
        paddingHorizontal: 10,
        //backgroundColor: 'transparent',
        backgroundColor: 'rgba(51, 102, 153, 0.75)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1
      },
      'com.prism.ui.TextArea:disabled': {
        color: '#9e9e9e'
      },

      'com.prism.ui.NumberStack': {
        flex: 1
      },
      'com.prism.ui.NumberStack.Title': {
        flex: 1
      },
      'com.prism.ui.NumberStack.Number': {
        flex: 1
      },

      'com.prism.ui.NumberStack.Title:small': {
        fontSize: 16
      },
      'com.prism.ui.NumberStack.Number:small': {
        fontSize: 40
      },
      'com.prism.ui.NumberStack.Title:medium': {
        fontSize: 20
      },
      'com.prism.ui.NumberStack.Number:medium': {
        fontSize: 55
      },
      'com.prism.ui.NumberStack.Title:large': {
        fontSize: 24
      },
      'com.prism.ui.NumberStack.Number:large': {
        fontSize: 70
      },

      'com.prism.ui.Activity': {
        tintColor: colors.cream
      },
      'com.prism.ui.Activity.ActivityIndicator': {
        flex: 0
      },
      bold: {
        fontFamily: fonts.medium
      },
    }
  }
}
```

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on February 4, 2018

[prism]: https://github.com/fika-community/prism
[prism primitives]: https://github.com/fika-community/prism#properties
[getting started]: https://github.com/fika-community/prism#getting-started


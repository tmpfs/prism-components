<h1 align="center">Prism Components</h1>
<p align="center">Component library for <a href="https://github.com/tmpfs/prism"title="Prism">Prism</a></p>
<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/tmpfs/prism/master/prism.png" />
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

Component library for [Prism](https://github.com/tmpfs/prism) using the namespace `prism`.

This library extends the [Prism Primitives](https://github.com/tmpfs/prism#properties) library, re-exporting all the underlying primitive components so you have a clear upgrade path if you want to use this library.

```javascript
import {
  View,
  Label,
  Heading,
  Panel
} from 'react-native-prism-components'
```

To view the components in action clone the repo, install dependencies and run the RN app.

## Getting Started

Configure your application (see the Prism [Getting Started](https://github.com/tmpfs/prism#getting-started) guide) and then you can import the components from `react-native-prism-components` to use them in your application.

## Component Styles

These are the component styles bundled with the library for reference, override them in your application styles.

```javascript
export default {
  colors: {
    cream: '#fdfbdf',
    disabled: '#9e9e9e',
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
      'WebView': {
        backgroundColor: 'transparent',
        flex: 1
      },
      'SafeAreaView': {
        backgroundColor: 'transparent',
        flex: 1
      },
      'Text': {
        fontSize: 16,
        color: colors.cream
      },
      'TextInput': {
        fontSize: 16,
        color: colors.cream
      },
      'prism|Layout': {
        flex: 1
      },
      'prism|Label': {
        fontFamily: fonts.regular,
        fontSize: 18,
        //color: colors.cream
      },
      'prism|Paragraph': {},
      'prism|ScrollPane': {
        flex: 1,
        //padding: 20
      },
      'prism|Panel header': {
        backgroundColor: '#336699',
        paddingVertical: 10,
        paddingHorizontal: 20,
        textTransform: 'uppercase'
      },
      'prism|Panel body': {
        backgroundColor: '#335599',
        padding: 20
      },
      'prism|BulletList': {
        color: colors.cream
      },
      'prism|BulletList bullet': {
        marginRight: 5
      },

      'prism|BackNavigationHeader': {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.backgroundDark
      },
      'prism|BackNavigation': {
        flex: 0
      },
      'prism|BackLink': {
        flexDirection: 'row'
      },
      'prism|BackLink image': {
        marginRight: 15,
        tintColor: colors.cream
      },
      'prism|BackLink label': {
        fontFamily: fonts.regular,
        // NOTE: must reset the font weight
        fontWeight: 'normal',
        color: colors.cream,
        fontSize: 18,
      },

      'prism|Notice': {
        padding: 10,
        borderRadius: 2,
        backgroundColor: '#336699',
      },
      'prism|Notice label': {
        color: colors.cream,
        fontSize: 15
      },
      'prism|Notice:error': {
        backgroundColor: 'red',
      },
      'prism|Notice label:error': {
        color: colors.cream
      },
      'prism|TouchButton': {
        // NOTE: must use opacity in backgroundColor
        backgroundColor: 'rgba(70, 130, 180, 1.0)',
        padding: 12,
        borderRadius: 4,
        // For flex layouts and keyboard view we don't
        // want our buttons squashed
        minHeight: 48
      },
      'prism|TouchButton label': {
        fontSize: 18,
        textAlign: 'center'
      },
      'prism|TouchButton:disabled': {
        // NOTE: must use opacity in backgroundColor
        backgroundColor: 'rgba(70, 130, 180, 0.2)'
      },
      'prism|List': {},
      'prism|ListItem': {
        backgroundColor: colors.backgroundDark,
        //textAlign: 'left',
        borderRadius: 0,
        paddingHorizontal: 12,
        minHeight: 45
      },
      'prism|ListItem label': {
        color: colors.cream,
        textAlign: 'left'
      },
      'prism|TextArea': {
        textAlignVertical: 'top',
        height: 100,
        paddingHorizontal: 10,
        placeholderColor: colors.cream,
        backgroundColor: 'rgba(51, 102, 153, 0.75)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        //borderRadius: 6,
        borderWidth: 1
      },
      'prism|TextArea:disabled': {
        placeholderColor: colors.disabled,
        color: colors.disabled
      },
      'prism|Input': {
        fontSize: 16,
        color: colors.cream,
        //borderRadius: 6,
        borderWidth: 1,
        backgroundColor: 'rgba(51, 102, 153, 0.75)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        placeholderColor: colors.cream,
        paddingVertical: 5,
        paddingHorizontal: 10
      },
      'prism|Input:disabled': {
        placeholderColor: colors.disabled,
        color: colors.disabled
      },
      'prism|NumberStack': {
        flex: 1
      },
      'prism|NumberStack title': {
        flex: 0
      },
      'prism|NumberStack number': {
        flex: 0
      },

      'prism|NumberStack title:small': {
        fontSize: 16
      },
      'prism|NumberStack number:small': {
        fontSize: 40
      },
      'prism|NumberStack title:medium': {
        fontSize: 20
      },
      'prism|NumberStack number:medium': {
        fontSize: 55
      },
      'prism|NumberStack title:large': {
        fontSize: 24
      },
      'prism|NumberStack number:large': {
        fontSize: 70
      },
      'prism|Activity': {
        tintColor: colors.cream,
        flex: 0
      },
      'prism|Activity activityIndicator': {
        flex: 0
      },
      'prism|Picture activity': {
        // Can overwrite invariant for child component
        //tintColor: 'blue'
      },
      'prism|Picture image': {
        position: 'absolute'
      },
      'prism|Frame': {
        flex: 1
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

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on June 18, 2018

[prism]: https://github.com/tmpfs/prism
[prism primitives]: https://github.com/tmpfs/prism#properties
[getting started]: https://github.com/tmpfs/prism#getting-started


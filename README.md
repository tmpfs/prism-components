<h1 align="center">Prism Components</h1>
<p align="center">Component library for <a href="https://github.com/fika-community/prism"title="Prism">Prism</a></p>
<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/fika-community/prism/master/prism.png" />
</p>

---

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Getting Started](#getting-started)
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

## Getting Started

Configure your application (see the Prism [Getting Started](https://github.com/fika-community/prism#getting-started) guide) and then you can import the components from `react-native-prism-components` to use the [Prism Properties](https://github.com/fika-community/prism#properties) in your application.

```javascript
import {
  Label,
  Heading,
  Panel
} from 'react-native-prism-components'
```

You can now define default style declarations for the primitive components in your style sheet:

```javascript
export default ({colors, fonts}) => {
  return {
    'com.prism.ui.View': {
      flex: 1
    },
    'com.prism.ui.Text': {
      fontFamily: fonts.regular,
      fontSize: 18,
      color: colors.muted
    },

    // Utils
    //
    //bold: {
      //fontFamily: fonts.medium
    //}
  }
}
```

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on January 31, 2018

[prism]: https://github.com/fika-community/prism
[getting started]: https://github.com/fika-community/prism#getting-started
[prism properties]: https://github.com/fika-community/prism#properties


<h1 align="center">Prism Components</h1>
<p align="center">Component library for <a href="https://github.com/fika-community/prism"title="Prism">Prism</a></p>
<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/fika-community/prism/master/prism.png" />
</p>

***
<!-- @toc -->
***

## Installation

Use your preferred package manager for installation.

```
npm i --save react-native-prism-components
yarn add react-native-prism-components
```

## Synopsis

Component library for [Prism][] using the namespace `com.prism.ui`.

This library extends the [Prism Primitives][] library, re-exporting all the underlying primitive components so you have a clear upgrade path if you want to use this library.

```javascript
import {
  View,
  Label,
  Heading,
  Panel
} from 'react-native-prism-components'
```

## Getting Started

Configure your application (see the Prism [Getting Started][] guide) and then you can import the components from `react-native-prism-components` to use them in your application.

## Component Styles

These are the component styles bundled with the library for reference, override them in your application styles.

<? @source {javascript} ../src/theme.js ?>

## License

MIT

[Prism]: https://github.com/fika-community/prism
[Prism Primitives]: https://github.com/fika-community/prism#properties
[Getting Started]: https://github.com/fika-community/prism#getting-started

export default {
  styles: ({colors, fonts}) => {
    return {
      'Text': {
        // Can test selective registry style
        // merge if you uncomment this
        //
        //color: 'black'
      },
      'prism|TextButton label': {
        color: '#9e9e9e',
        textAlign: 'center'
      }
    }
  }
}

export default ({colors, fonts}) => {
  return {
    'com.prism.ui.Layout': {
      flex: 1
    },
    'com.prism.ui.Label': {
      fontFamily: fonts.regular,
      fontSize: 18,
      color: colors.cream
    },
    'com.prism.ui.ScrollPane': {
      flex: 1,
      padding: 20
    },
    'com.prism.ui.Panel.Header': {
      backgroundColor: '#336699',
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    'com.prism.ui.Panel.Body': {
      backgroundColor: '#335599',
      padding: 20
    }

    // Utils
    //
    //bold: {
      //fontFamily: fonts.medium
    //}
  }
}

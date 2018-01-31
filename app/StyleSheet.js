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

export default ({colors, fonts}) => {
  return {
    'Text': {
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
    },
    'com.prism.ui.BulletList': {
      color: colors.cream
    },
    'com.prism.ui.BulletList.Bullet': {
      marginRight: 5
    },
    'com.prism.ui.Notice': {
      padding: 10,
      borderRadius: 2,
      backgroundColor: colors.cream,
    },
    'com.prism.ui.Notice.Label': {
      color: 'steelblue'
    },
    'com.prism.ui.Notice.Error': {
      backgroundColor: 'red',
    },
    'com.prism.ui.Notice.Label.Error': {
      color: colors.cream
    },

    // Utils
    //
    //bold: {
      //fontFamily: fonts.medium
    //}
  }
}

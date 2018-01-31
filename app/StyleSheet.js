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
    'com.prism.ui.Button.Disabled': {
      //backgroundColor: 'rgba(248, 231, 29, 1.0)',
      //opacity: 0.2
    },
    'com.prism.ui.List': {},
    'com.prism.ui.ListItem': {
      //backgroundColor: colors.backgroundGreen,
      textAlign: 'left',
      borderRadius: 0,
      paddingLeft: 12,
      height: 45
    },

    // Utils
    //
    //bold: {
      //fontFamily: fonts.medium
    //}
  }
}

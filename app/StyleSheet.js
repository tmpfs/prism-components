export default ({colors, fonts}) => {
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
      backgroundColor: colors.backgroundDark,
      textAlign: 'left',
      borderRadius: 0,
      paddingLeft: 12,
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
    'com.prism.ui.TextArea.Disabled': {
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

    'com.prism.ui.NumberStack.Title.Small': {
      fontSize: 16
    },
    'com.prism.ui.NumberStack.Number.Small': {
      fontSize: 40
    },
    'com.prism.ui.NumberStack.Title.Medium': {
      fontSize: 20
    },
    'com.prism.ui.NumberStack.Number.Medium': {
      fontSize: 55
    },
    'com.prism.ui.NumberStack.Title.Large': {
      fontSize: 24
    },
    'com.prism.ui.NumberStack.Number.Large': {
      fontSize: 70
    },

    'com.prism.ui.Activity': {
    },
    'com.prism.ui.Activity.ActivityIndicator': {
      flex: 0,
      color: colors.tint
    },

    // Utils
    //
    //bold: {
      //fontFamily: fonts.medium
    //}
  }
}

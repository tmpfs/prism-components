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
      'prism|Panel Header': {
        backgroundColor: '#336699',
        paddingVertical: 10,
        paddingHorizontal: 20,
        textTransform: 'uppercase'
      },
      'prism|Panel Body': {
        backgroundColor: '#335599',
        padding: 20
      },
      'prism|BulletList': {
        color: colors.cream
      },
      'prism|BulletList Bullet': {
        marginRight: 5
      },
      'prism|BackNavigation': {
        flex: 0,
        backgroundColor: colors.backgroundDark
      },
      'prism|BackLink': {
        flexDirection: 'row',
        width: '100%',
        //alignContent: 'center',
        alignItems: 'flex-start',
        padding: 12,
      },

      'prism|BackLink Image': {
        marginRight: 15,
        tintColor: colors.cream
      },

      'prism|BackLink Label': {
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
      'prism|Notice Label': {
        color: colors.cream,
        fontSize: 15
      },
      'prism|Notice:error': {
        backgroundColor: 'red',
      },
      'prism|Notice Label:error': {
        color: colors.cream
      },
      'prism|TouchButton': {
        paddingTop: 12,
        backgroundColor: 'steelblue',
        borderRadius: 4,
        overflow: 'hidden',
        height: 45,
        width: '100%'
      },
      'prism|TouchButton Label': {
        fontSize: 18,
        textAlign: 'center'
      },
      'prism|TouchButton:disabled': {
        //backgroundColor: 'rgba(248, 231, 29, 1.0)',
        //opacity: 0.2
      },
      'prism|List': {},
      'prism|ListItem': {
        backgroundColor: colors.backgroundDark,
        //textAlign: 'left',
        borderRadius: 0,
        paddingHorizontal: 12,
        height: 45
      },
      'prism|ListItem Label': {
        color: colors.cream,
        textAlign: 'left'
      },
      'prism|TextArea': {
        textAlignVertical: 'top',
        height: 100,
        paddingHorizontal: 10,
        //backgroundColor: 'transparent',
        backgroundColor: 'rgba(51, 102, 153, 0.75)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1
      },
      'prism|TextArea:disabled': {
        color: '#9e9e9e'
      },

      'prism|NumberStack': {
        flex: 1
      },
      'prism|NumberStack Title': {
        flex: 1
      },
      'prism|NumberStack Number': {
        flex: 1
      },

      'prism|NumberStack Title:small': {
        fontSize: 16
      },
      'prism|NumberStack Number:small': {
        fontSize: 40
      },
      'prism|NumberStack Title:medium': {
        fontSize: 20
      },
      'prism|NumberStack Number:medium': {
        fontSize: 55
      },
      'prism|NumberStack Title:large': {
        fontSize: 24
      },
      'prism|NumberStack Number:large': {
        fontSize: 70
      },
      'prism|Activity': {
        tintColor: colors.cream
      },
      'prism|Activity ActivityIndicator': {
        flex: 0
      },
      'prism|Picture Activity': {
        // Can overwrite invariant for child component
        //tintColor: 'blue'
      },
      'prism|Picture Image': {
        position: 'absolute'
      },
      bold: {
        fontFamily: fonts.medium
      },
    }
  }
}

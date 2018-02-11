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
        paddingTop: 12,
        backgroundColor: 'rgba(70, 130, 180, 1.0)',
        // NOTE: must use opacity in backgroundColor
        //backgroundColor: 'steelblue',
        //opacity: 1,
        borderRadius: 4,
        overflow: 'hidden',
        height: 45,
        width: '100%'
      },
      'prism|TouchButton label': {
        fontSize: 18,
        textAlign: 'center'
      },
      'prism|TouchButton:disabled': {
        // NOTE: must use opacity in backgroundColor
        //opacity: 0.2,
        backgroundColor: 'rgba(70, 130, 180, 0.2)'
      },
      'prism|List': {},
      'prism|ListItem': {
        backgroundColor: colors.backgroundDark,
        //textAlign: 'left',
        borderRadius: 0,
        paddingHorizontal: 12,
        height: 45
      },
      'prism|ListItem label': {
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
        flex: 0
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
        tintColor: colors.cream
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
      bold: {
        fontFamily: fonts.medium
      },
    }
  }
}

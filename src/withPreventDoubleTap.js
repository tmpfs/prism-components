import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

const withPreventDoubleTap = (WrappedComponent) => {

  class PreventDoubleTap extends React.PureComponent {

    // NOTE: must proxy style configuration data
    static styleName = WrappedComponent.styleName
    static styleOptions = WrappedComponent.styleOptions
    static mapPropsToStyle = WrappedComponent.mapPropsToStyle
    static mapStyleToProps = WrappedComponent.mapStyleToProps

    static propTypes = {
      debounceTimeout: PropTypes.number,
      debounceOptions: PropTypes.object
    }

    static defaultProps = {
      debounceTimeout: 500,
      debounceOptions: {leading: true, trailing: false}
    }

    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress()
    }

    onPress = debounce(
      this.debouncedOnPress,
      this.props.debounceTimeout,
      this.props.debounceOptions)

    render() {
      return <WrappedComponent
        {...this.props}
        onPress={this.onPress} />
    }
  }

  const name = WrappedComponent.displayName || WrappedComponent.name
  PreventDoubleTap.displayName = `withPreventDoubleTap(${name})`
  return PreventDoubleTap
}

export default withPreventDoubleTap

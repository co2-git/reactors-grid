import React, {Component} from 'react';
import {View} from 'react-native';
import omit from 'lodash/omit';

export default class ReactorsGridMobile extends Component {
  render() {
    let propStyle = this.props.style || [];

    if (!Array.isArray(propStyle)) {
      propStyle = Array.from(propStyle);
    }

    return (
      <View
        {...omit(this.props, ['__ReactorsGridStyle'])}
        style={[
          omit(this.props.__ReactorsGridStyle, ['alignContent']),
          ...propStyle,
        ]}
        >
        {this.props.children}
      </View>
    );
  }
}

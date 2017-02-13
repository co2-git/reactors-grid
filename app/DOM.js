import React, {Component} from 'react';
import omit from 'lodash/omit';
import {View} from 'reactors';

export default class ReactorsGridDOM extends Component {
  render() {
    const props = omit(this.props, ['__ReactorsGridStyle']);
    const style = {
      display: 'flex',
      ...omit(this.props.__ReactorsGridStyle, ['flex']),
      ...this.props.style,
    };
    console.log({props, style});
    return (
      <View
        {...props}
        style={style}
        >
        {this.props.children}
      </View>
    );
  }
}

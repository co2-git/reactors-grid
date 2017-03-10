import React, {Component} from 'react';
import Reactors, {View} from 'reactors';
import omit from 'lodash/omit';

export default class ReactorsGridMobile extends Component {
  render() {
    const props = omit(this.props, ['__ReactorsGridStyle']);
    const style = Reactors.mergeStyles(
      omit(this.props.__ReactorsGridStyle, ['alignContent']),
      this.props.style,
    );

    return (
      <View {...props} style={style}>
        {this.props.children}
      </View>
    );
  }
}

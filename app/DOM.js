import React, {Component} from 'react';
import omit from 'lodash/omit';

export default class ReactorsGridDOM extends Component {
  render() {
    return (
      <div
        {...omit(this.props, ['__ReactorsGridStyle'])}
        style={{
          ...this.props.__ReactorsGridStyle,
          ...this.props.style,
        }}
        >
        {this.props.children}
      </div>
    );
  }
}

import React, {Component} from 'react';
import omit from 'lodash/omit';

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
      <div
        {...props}
        style={style}
        >
        {this.props.children}
      </div>
    );
  }
}

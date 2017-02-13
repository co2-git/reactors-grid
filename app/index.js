import React, {Component} from 'react';
import Base from './Base';

class ReactorsGridRow extends Component {
  render() {
    return (
      <Base {...this.props} flexDirection="row" />
    );
  }
}

class ReactorsGridStack extends Component {
  render() {
    return (
      <Base {...this.props} flexDirection="column" />
    );
  }
}

export {ReactorsGridRow as Row};
export {ReactorsGridStack as Stack};

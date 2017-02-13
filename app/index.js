import React, {Component} from 'react';
import Base from './Base';

class ReactorsGridRow extends Component {
  render() {
    return (
      <Base {...this.props} direction="row" />
    );
  }
}

class ReactorsGridStack extends Component {
  render() {
    return (
      <Base {...this.props} direction="column" />
    );
  }
}

export {ReactorsGridRow as Row};
export {ReactorsGridStack as Stack};

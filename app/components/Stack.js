import React from 'react';
import Reactors from 'reactors';

export default function Stack(props) {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile': {
    const StackMobile = require('./StackMobile').default;
    return (
      <StackMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const StackWeb = require('./StackWeb').default;
    return (
      <StackWeb {...props} />
    );
  }
  }
}

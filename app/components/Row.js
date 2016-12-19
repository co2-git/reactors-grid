import React from 'react';
import Reactors from 'reactors';

export default function Row(props) {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile': {
    const RowMobile = require('./RowMobile').default;
    return (
      <RowMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const RowWeb = require('./RowWeb').default;
    return (
      <RowWeb {...props} />
    );
  }
  }
}

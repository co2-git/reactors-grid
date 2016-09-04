import React from 'react';
import Reactors from 'reactors';
import renderMobile from './Row/mobile';
import renderWeb from './Row/web';

export default function Row(props) {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop':
    return renderWeb(props);
  }
}

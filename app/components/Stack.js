import React from 'react';
import Reactors from 'reactors';
import renderMobile from './Stack/mobile';
import renderWeb from './Stack/web';

export default function Stack(props) {
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

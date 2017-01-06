import React from 'react';

export default function RowWeb(props) {
  let justifyContent = 'space-between';
  let alignItems = 'center';
  let flexDirection = 'row';
  let flexWrap = 'nowrap';

  for (const key in props) {
    switch (key) {

    case 'center': {
      justifyContent = 'center';
      alignItems = 'center';
    } break;

    case 'center-x': {
      justifyContent = 'center';
    } break;

    case 'space-between': {
      justifyContent = 'space-between';
    } break;

    case 'space-around': {
      justifyContent = 'space-around';
    } break;

    case 'left': {
      justifyContent = 'flex-start';
    } break;

    case 'right': {
      justifyContent = 'flex-end';
    } break;

    case 'up': {
      alignItems = 'flex-start';
    } break;

    case 'down': {
      alignItems = 'flex-end';
    } break;

    case 'center-y': {
      alignItems = 'center';
    } break;

    case 'reverse': {
      flexDirection = 'row-reverse';
    } break;

    case 'wrap': {
      flexWrap = props.wrap ? 'wrap' : 'nowrap';
    } break;

    case 'nowrap':
    case 'no-wrap': {
      flexWrap = 'nowrap';
    } break;

    }
  }

  const style = {
    display: 'flex',
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    ...props.style,
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
}

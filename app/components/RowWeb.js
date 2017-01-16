import React from 'react';

export default function RowWeb(props) {
  let justifyContent = 'space-between';
  let alignItems = 'center';
  let alignContent = 'stretch';
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

    case 'space': {
      justifyContent = `space-${props.space}`;
    } break;

    case 'space-between':
    case 'between': {
      justifyContent = 'space-between';
    } break;

    case 'space-around':
    case 'around': {
      justifyContent = 'space-around';
    } break;

    case 'space-evenly':
    case 'evenly':
    case 'even': {
      justifyContent = 'space-evenly';
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

    case 'stretch': {
      alignItems = 'stretch';
    } break;

    case 'reverse': {
      flexDirection = 'row-reverse';
    } break;

    case 'wrap': {
      switch (props.wrap) {

      case true: {
        flexWrap = 'wrap';
      } break;

      case false: {
        flexWrap = 'nowrap';
      } break;

      case 'up': {
        flexWrap = 'wrap';
        alignContent = 'flex-start';
      } break;

      case 'down': {
        flexWrap = 'wrap';
        alignContent = 'flex-end';
      } break;

      case 'center': {
        flexWrap = 'wrap';
        alignContent = 'center';
      } break;

      case 'stretch': {
        flexWrap = 'wrap';
        alignContent = 'stretch';
      } break;

      case 'around': {
        flexWrap = 'wrap';
        alignContent = 'space-around';
      } break;

      case 'between': {
        flexWrap = 'wrap';
        alignContent = 'space-between';
      } break;

      }
    } break;

    case 'nowrap':
    case 'no-wrap': {
      flexWrap = 'nowrap';
    } break;

    case 'wrap-up': {
      flexWrap = 'wrap';
      alignContent = 'flex-start';
    } break;

    case 'wrap-down': {
      flexWrap = 'wrap';
      alignContent = 'flex-end';
    } break;

    case 'wrap-center': {
      flexWrap = 'wrap';
      alignContent = 'center';
    } break;

    case 'wrap-stretch': {
      flexWrap = 'wrap';
      alignContent = 'stretch';
    } break;

    case 'wrap-around': {
      flexWrap = 'wrap';
      alignContent = 'space-around';
    } break;

    case 'wrap-between': {
      flexWrap = 'wrap';
      alignContent = 'space-between';
    } break;

    }
  }

  const style = {
    display: 'flex',
    alignContent,
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

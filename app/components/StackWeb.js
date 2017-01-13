import React from 'react';
import Reactors from 'reactors';

export default function StackWeb(props) {
  let justifyContent = 'space-between';
  let alignItems = 'stretch';
  let alignContent = 'stretch';
  let flexDirection = 'column';
  let flexWrap = 'nowrap';

  for (const key in props) {
    switch (key) {

    case 'stretch': {
      alignItems = 'stretch';
    } break;

    case 'center': {
      justifyContent = 'center';
      alignItems = 'center';
    } break;

    case 'center-x': {
      alignItems = 'center';
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
      flexDirection = 'column-reverse';
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

  const webProps = Reactors.props({
    ...props,
    style,
  });

  return (
    <div {...webProps}>
      {props.children}
    </div>
  );
}

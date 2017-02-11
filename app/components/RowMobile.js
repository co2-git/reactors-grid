import React from 'react';
import Reactors, {View} from 'reactors';

export default function RowMobile(props) {
  const mobileProps = Reactors.props(props);

  let justifyContent = 'space-between';
  let alignItems = 'center';
  let flexDirection = 'row';
  let flexWrap = 'nowrap';

  for (const key in mobileProps) {
    switch (key) {

    case 'center': {
      justifyContent = 'center';
      alignItems = 'center';
    } break;

    case 'centerHorizontal': {
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

    case 'centerVertical': {
      alignItems = 'center';
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
      } break;

      case 'down': {
        flexWrap = 'wrap';
      } break;

      case 'center': {
        flexWrap = 'wrap';
      } break;

      case 'stretch': {
        flexWrap = 'wrap';
      } break;

      case 'around': {
        flexWrap = 'wrap';
      } break;

      case 'between': {
        flexWrap = 'wrap';
      } break;

      }
    } break;

    case 'nowrap':
    case 'no-wrap': {
      flexWrap = 'nowrap';
    } break;

    case 'wrap-up': {
      flexWrap = 'wrap';
    } break;

    case 'wrap-down': {
      flexWrap = 'wrap';
    } break;

    case 'wrap-center': {
      flexWrap = 'wrap';
    } break;

    case 'wrap-stretch': {
      flexWrap = 'wrap';
    } break;

    case 'wrap-around': {
      flexWrap = 'wrap';
    } break;

    case 'wrap-between': {
      flexWrap = 'wrap';
    } break;

    }
  }

  const style = {
    // alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent
  };

  let propStyle = props.style;

  if (propStyle && !Array.isArray(propStyle)) {
    propStyle = Array.from(propStyle);
  }

  return (
    <View {...mobileProps} style={[style, ...propStyle]}>
      {props.children}
    </View>
  );
}

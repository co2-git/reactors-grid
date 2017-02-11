import React from 'react';
import {View} from 'react-native';

export default function StackMobile(props) {
  const style = [
    {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    props.style,
  ];

  if (props.grow) {
    style.push({
      flex: 1,
    });
  }

  if (props.centerHorizontal) {
    style.push({
      alignItems: 'center',
    });
  }

  if (props.centerVertical) {
    style.push({
      justifyContent: 'center',
    });
  }

  return (
    <View style={style} {...props}>
      {props.children}
    </View>
  );
}

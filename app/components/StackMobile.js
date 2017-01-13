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
  return (
    <View style={style} {...props}>
      {props.children}
    </View>
  );
}

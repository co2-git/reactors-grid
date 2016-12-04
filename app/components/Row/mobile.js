import React from 'react';
import {View} from 'react-native';

export default function RowMobile(props) {
  const style = [
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    props.style,
  ];
  return (
    <View style={style} {...props}>
      {props.children}
    </View>
  );
}

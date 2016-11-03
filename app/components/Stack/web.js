import React from 'react';

export default function StackWeb(props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    ...props.style,
  };
  style.justifyContent = 'space-between';
  return (
    <div style={style} {...props}>
      {props.children}
    </div>
  );
}

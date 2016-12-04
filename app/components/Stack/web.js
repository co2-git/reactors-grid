import React from 'react';

export default function StackWeb(props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    ...props.style,
  };
  style.justifyContent = 'space-between';
  return (
    <div style={style} {...props}>
      {props.children}
    </div>
  );
}

import React from 'react';

export default function StackWeb(props) {
  let alignItems = 'center';
  let justifyContent = 'space-between';

  if (props.center) {
    justifyContent = 'center';
    alignItems = 'center';
  }

  if (props.stretch) {
    alignItems = 'stretch';
  }

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent,
    alignItems,
    borderWidth: 5,
    ...props.style,
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
}

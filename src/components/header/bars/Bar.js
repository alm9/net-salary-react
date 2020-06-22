import React from 'react';

export default function Bar(props) {
  const { value, color = 'black' } = props;

  return (
    <div
      style={{
        marginTop: '40px',
        width: value + '%',
        height: '20px',
        backgroundColor: color,
      }}
    />
  );
}

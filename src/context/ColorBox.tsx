import { useContext } from 'react';
import { ColorContext } from './color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
          zIndex: 999,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
          zIndex: 999,
        }}
      />
    </>
  );
};

export default ColorBox;

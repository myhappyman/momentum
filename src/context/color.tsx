import { useState, createContext } from 'react';

export const ColorContext = createContext<{
  state: { color: string; subcolor: string };
  actions: {
    setColor: React.Dispatch<React.SetStateAction<string>>;
    setSubcolor: React.Dispatch<React.SetStateAction<string>>;
  };
}>({
  state: { color: 'black', subcolor: 'red' },
  actions: { setColor: () => {}, setSubcolor: () => {} },
});

const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider };

export default ColorProvider;

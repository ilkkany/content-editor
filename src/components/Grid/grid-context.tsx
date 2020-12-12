import React, { useState } from "react";

const defaultGridSettings = {
  clickValue: 1,
  setClickValue: (value: number) => console.log("asd"),
};

export const GridContext = React.createContext(defaultGridSettings);

export const GridProvider = ({ children, value }) => {
   const [currentClickValue, setCurrentClickValue] = useState(
    value || 1
   );

   const setClickValue = (value: number) => {
    setCurrentClickValue(value)
   };

   return (
      <GridContext.Provider
         value={{ clickValue: currentClickValue, setClickValue: setClickValue }}
      >
         {children}
      </GridContext.Provider>
   );
};

export const GridConsumer = GridContext.Consumer;

export default GridContext;

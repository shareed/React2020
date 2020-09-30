import { useState } from 'react';

export const useInput = (initialValue, debugName) => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = event => {
    setValue(event.target.value);
  };
  return [value, setValue, handleChanges];
};

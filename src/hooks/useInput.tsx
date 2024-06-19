import { useState, ChangeEvent } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement>;

interface UseInputOptions {
  initialValue?: string;
}

const useInput = ({ initialValue = '' }: UseInputOptions = {}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: InputEvent) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};

export default useInput;

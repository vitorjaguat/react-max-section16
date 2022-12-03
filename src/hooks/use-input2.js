import { useState } from 'react';

const useInput2 = (validateFunction) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFunction(enteredValue);
  const inputHasError = !validateFunction(enteredValue) && isTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput2;

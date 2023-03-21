export const isBtnDisabled = inputObj => {
  return Object.values(inputObj).some(el => !el);
};

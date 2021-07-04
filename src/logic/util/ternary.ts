const ternary = (bool: boolean, truthy: any, falsey: any) => {
  if (bool) {
    return truthy;
  }
  return falsey;
};

export default ternary;

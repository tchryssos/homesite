// See https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
export const getWindow = () => {
  if (typeof window !== 'undefined') {
    return window;
  }
  return undefined;
};

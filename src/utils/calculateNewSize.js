export const calculateSize = (width, sizeElement) => {
  const newSize = (width / 1920) * sizeElement;
  return width < 1920 && newSize;
};

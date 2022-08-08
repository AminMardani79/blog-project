export const sliceContent = (content) => {
  const contentArr = content.split("").slice(0, 90).join("");
  return contentArr;
};

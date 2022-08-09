export const sliceContent = (content) => {
  const contentArr = content.split("").slice(0, 90).join("");
  return contentArr;
};
export const pagesCount = (data, itemsPerPage) => {
  return Math.ceil(data.length / itemsPerPage);
};
export const filterPosts = (posts, ...filters) => {
  let filteredPosts = posts.filter(
    (post) =>
      post.author.name.includes(filters[0]) &&
      post.title.includes(filters[1]) &&
      post.author.field.toLowerCase().includes(filters[2].toLowerCase())
  );
  return filteredPosts;
};

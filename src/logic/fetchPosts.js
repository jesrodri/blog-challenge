const totalPosts = 95;
const pageSize = 20;

const pageArray = (total, size) => {
  const totalPages = total / size;
  const fullPages = Math.floor(totalPages);
  const partialPage = total % size;

  return [
    ...new Array(fullPages).fill(size),
    partialPage
  ].filter(Boolean);
}

export const fetchPosts = (api) => {
  return (pageArray(totalPosts, pageSize)
  .map((size, index) => () => {
    return api
      .get(`/posts`, {
        params: {
          _start: index * pageSize,
          _limit: size,
        },
      })
      .then((res) => res.data)
      .catch(() => {
        throw new Error('Failed to load posts');
      })
  })
  .reduce(
    (chain, listPostFn) => chain.then((acc) => listPostFn().then((res) => [...acc, ...res])),
    Promise.resolve([])
  ))
};

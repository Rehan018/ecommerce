const paginateResults = (page, limit, results) => {
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(page * limit, results.length); // Correctly calculate endIndex

  const paginatedResults = {};

  if (endIndex < results.length) {
    paginatedResults.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    paginatedResults.previous = {
      page: page - 1,
      limit: limit
    };
  }

  paginatedResults.results = results.slice(startIndex, endIndex);

  return paginatedResults;
};

module.exports = paginateResults;

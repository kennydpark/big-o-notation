const array = [1, 2, 3, 4, 5, 6, 7, 8];

function determineSumOfSequentialArray(array) {
  return array.length * (array.length + 1) / 2;
}

// No matter how big the size of the data set, our algorithm is simply doing a single computation.
// Because arrays have an inherent length property, there are no extra operations for larger arrays.
// This algorithm is O(1) (constant time). This is a much more efficient way to sum sequential arrays!

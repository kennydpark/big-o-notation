unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']);
// ['cat', 'dog', 'rat', 'bird']

const unique = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }

  return newArray;
}

// Time complexity: O(n^2)
// Space complexity: O(n)
// where n is the input array size


// make it better

const unique = (array) => {
  const onlyUniques = new Set();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    onlyUniques.add(element);
  }

  return Array.from(onlyUniques);
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the input array size

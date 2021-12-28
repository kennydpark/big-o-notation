const doubler = (items) => {
  let newArray = []; //

  for (let i = 0; i < items.length; i++) { // 2n
    newArray.push(items[i]);
    newArray.push(items[i]);
  }

  return newArray;
};

doubler(['a', 'b', 'c']); // ['a', 'a', 'b', 'b', 'c', 'c']

// O(n), where n is the length of the input array

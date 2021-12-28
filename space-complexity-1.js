const calculateAverage = (numbers) => {
  let sum = 0; // 1 var (created once)

  for (let i = 0; i < numbers.length; i++) { // 1 var - let i = 0 (created once)
    let number = numbers[i]; // 1 var (memory frees up when var reassigned)
    sum += number;
  }

  return sum / numbers.length;
};

// O(3) -> O(1)

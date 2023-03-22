function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  let newArray = numberArray.map((num) => {
    return { val: num };
  });
  return newArray;
}

const numbers = [1, 2, 3];
console.log(transformToObjects(numbers));

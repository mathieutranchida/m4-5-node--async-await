// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject('Error: Not all items in the array are strings!');
  });
};

const sortWords = (array) =>  {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.sort())
      : reject('Error: Something went wrong with sorting words.');
  });
};

const textTransform = async (array) => {
  try {
    const allCaps = await makeAllCaps(array);
    const sortedArray = await sortWords(allCaps);
    console.log(sortedArray);
    return sortedArray
  } catch (err) {
    console.log(err);
  }
};

textTransform(['cucumber', 'tomatos', 'avocado']);
textTransform(['cucumber', 44, true]);

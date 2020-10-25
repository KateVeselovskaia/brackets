module.exports = function check(str, bracketsConfig) {
  let bracketPairs = [];
  bracketsConfig.forEach(item => {
    bracketPairs.push(item.join(''));
  });

  while (bracketPairs.some(pair => str.includes(pair))) {
    bracketsConfig.forEach(arr => {
      let pairForDelete = arr.join('');
       (pairForDelete);
      while (str.includes(pairForDelete)) {
        str = str.replace(pairForDelete, '');
      }
    });
  }
  return  str === '';
}

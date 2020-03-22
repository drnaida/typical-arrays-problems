exports.min = function min (array) {
  if (!array || array.length == 0 ) {
    return 0;
  } else {
    let min = 0;
    array.forEach(item => {
      if (min > item) {
        min = item;
      }
      });
    return min;
  }
}

exports.max = function max (array) {
  if (!array || array.length == 0 ) {
    return 0;
  } else {
    let max = array[0];
    array.forEach(item => {
      if (max < item) {
        max = item;
      }
    });
    return max;
  }
}

exports.avg = function avg (array) {
  let sum = 0;
  if (!array || array.length == 0 ) {
    return 0;
  } else {
    array.forEach(item => {
      sum += item;
    });
    let average = sum/array.length;
    return average;
  }

}

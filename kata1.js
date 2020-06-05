let sumLargestNumbers = function(data) {
  // Put your solution here
  data.sort(function(a, b){return a - b});
  return data[data.length-1]+ data[data.length-2];
}
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10,4,34,6,92,2]));

  //inja aval miyaym sort mikonim badesh do taye akhar o ke mishe length -1 va length -2 baham jam mikonim
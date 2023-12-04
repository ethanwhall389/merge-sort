const input = document.querySelector('input');
const bttn = document.querySelector('button');
const cont = document.querySelector('.sort-cont')

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
})

bttn.addEventListener('click', () => {
  const inputVal = input.value;
  const inputArray = inputVal.split(',');
  
  let numArray = []
  inputArray.forEach( (num) => {
    numArray.push(Number(num.trim()));
  })
  
  const result = mergeSort(numArray);
  displayResult(result);
})

function displayResult (resultArray) {
  const result = document.createElement('p');
  result.textContent = resultArray;
  cont.appendChild(result);
  
}



function mergeSort (array) {  
  if (array.length < 2) return array
    
    //Split array in half
    const midpoint = Math.ceil(array.length / 2);
    const firstHalf = array.slice(0, midpoint);
    const secondHalf = array.slice(midpoint);
    
    //run mergeSort on each half
    const firstHalfSorted = mergeSort(firstHalf);
    const secondHalfSorted = mergeSort(secondHalf);
    
    //Sort the two halves into new array
    const sortedArray = [];
    while (firstHalfSorted.length > 0 && secondHalfSorted.length > 0) {
      
      if (firstHalfSorted[0] <= secondHalfSorted[0]) {
        sortedArray.push(firstHalfSorted[0]);
        firstHalfSorted.shift();
      } else {
        sortedArray.push(secondHalfSorted[0]);
        secondHalfSorted.shift();
      }      
    }
  
  //concatenate any last value that may be left over.
  return sortedArray.concat(firstHalfSorted, secondHalfSorted);
}

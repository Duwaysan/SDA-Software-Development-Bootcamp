# Insertion Sort Solution

```js
function insertionSort(array) {
  // Start a loop to go through the entire array
  for (let i = 0; i < array.length; i++) {
    // Remove the current element from the array and store it in a variable
    // Splice returns an array of deleted items, so we take the first element [0]
    let placeholder = array.splice(i, 1)[0];

    // Initialize a variable to find the correct position to insert the placeholder
    let z = 0;

    // Loop through the sorted portion of the array (up to index i)
    // Find the position where the value in the sub-array is less than the placeholder
    while (z < i && array[z] < placeholder) {
      z++;
    }

    // Insert the placeholder at the correct position in the array
    array.splice(z, 0, placeholder);
  }

  // Return the sorted array
  return array;
}

module.exports = insertionSort;
```

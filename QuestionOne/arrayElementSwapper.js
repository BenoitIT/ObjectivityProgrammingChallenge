const swapElements = (array, index1, index2) => {
    //check indexes out of range
    if (index1 >= array.length || index2 >= array.length) {
      return array;
    }
    // swap the elements using a temporary variable
    const temporary = array[index1];
    array[index1] = array[index2];
    array[index2] = temporary;
    return array;
  };
  module.exports ={swapElements}

var array_of_elements = ["Hello", 7, 1, "world", 5];

function generateRandomElement(elements){
  var random_number = Math.floor(Math.random() * elements.length);
  return elements[random_number];
}

alert(generateRandomElement(array_of_elements));

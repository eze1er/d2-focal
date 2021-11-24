const reverse = function(input) {
  if (input !== '') {
    let newArray = input.split("");
    let reverseArray = newArray.reverse();
    let joinArray = reverseArray.join('');
    console.log(joinArray);
    return joinArray;
  } else {
    console.log('No input to reverse ');
    return "NaN";
  }
};
reverse("hello");

function forLoop(array) {
  for (var i = 0; i<25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
      return array
    } else {
      array.push(`I am ${i} strange loop.`)
      return array
    }
  }
}

function whileLoop(number) {
  while(number>0) {
    console.log(number)
    number -= number;
  }
  return 'done'
}


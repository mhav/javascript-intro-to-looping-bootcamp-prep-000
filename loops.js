function forLoop(inArray) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      inArray.push("I am 1 strange loop.")
    } else {
      inArray.push(`I am ${i} loops.`)
    }
  }
  return inArray
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

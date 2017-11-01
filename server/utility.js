function selectThree() {
  let array = []
  const number1 = Math.floor(Math.random() * 8) + 1
  array.push(number1)
  let number2 = Math.floor(Math.random() * 8) + 1
  if(!array.includes(number2)) {
    array.push(number2)
  }
  else {
    number2 = Math.floor(Math.random() * 8) + 1
    array.push(number2)
  }
  let number3 = Math.floor(Math.random() * 8) + 1
  if(!array.includes(number3)) {
    array.push(number3)
  }
  else {
    number3 = Math.floor(Math.random() * 8) + 1
    array.push(number3)
  }
  console.log(array)
  return array
}

selectThree()

function selectThree() {
  var arr = []
  while(arr.length < 3){
    var randomnumber = Math.ceil(Math.random()*8)
    if(arr.indexOf(randomnumber) > -1) continue
    arr[arr.length] = randomnumber
  }
  return arr
}

const threeArr = selectThree()

function filterForThree(arrayOfObjs, threeArray) {
  const threeObjs = arrayOfObjs.map(item => {
    if(threeArray.includes(item.id)) {
      return item
    }
  })
  return threeObjs
}

module.exports = { selectThree, filterForThree }

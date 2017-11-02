const obj1 = [
  {
    id: 1,
    name: 'steve'
  },
  {
    id: 2,
    name: 'bob'
  },
  {
    id: 3,
    name: 'bit'
  },
  {
    id: 4,
    name: 'nan'
  },
  {
    id: 5,
    name: 'sik'
  },
  {
    id: 6,
    name: 'stan'
  },
  {
    id: 7,
    name: 'gee'
  },
  {
    id: 8,
    name: 'bob'
  }
]

const obj2 = [
  {
    id: 1,
    name: 'steve'
  },
  {
    id: 2,
    name: 'bob'
  },
  {
    id: 3,
    name: 'bit'
  },
  {
    id: 4,
    name: 'nan'
  },
  {
    id: 5,
    name: 'sik'
  },
  {
    id: 6,
    name: 'stan'
  },
  {
    id: 7,
    name: 'gee'
  },
  {
    id: 8,
    name: 'bob'
  }
]

const obj3 = [
  {
    id: 1,
    name: 'steve'
  },
  {
    id: 2,
    name: 'bob'
  },
  {
    id: 3,
    name: 'bit'
  },
  {
    id: 4,
    name: 'nan'
  },
  {
    id: 5,
    name: 'sik'
  },
  {
    id: 6,
    name: 'stan'
  },
  {
    id: 7,
    name: 'gee'
  },
  {
    id: 8,
    name: 'bob'
  }
]
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

filterForThree(obj1, threeArr)
filterForThree(obj2, threeArr)
filterForThree(obj3, threeArr)

module.exports = { selectThree, filterForThree }

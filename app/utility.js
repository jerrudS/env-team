function selectThree() {
  var arr = []
  while(arr.length < 3){
    var randomnumber = Math.ceil(Math.random()*8)
    if(arr.indexOf(randomnumber) > -1) continue
    arr[arr.length] = randomnumber
  }
  return arr
}

function filterForThree(arrayOfObjs, threeArray) {
  const threeObjs = arrayOfObjs.map(item => {
    if(threeArray.includes(item.id)) {
      return item
    }
  })
  return threeObjs
}

function applyAttributes(employeesObject) {
  const employeeFirst = []
  const employeeSecond = []
  const employeeThird = []
  const employeeFourth = []
  const threeEmployees = employeesObject.forEach(employee => {
    if(employeeSecond.length === 1 && employee !== undefined) {
      employeeThird.push(employee)
    }
    if(employeeFirst.length === 1 && employeeSecond.length === 0 && employee !== undefined) {
      employeeSecond.push(employee)
    }
    if(employeeFirst.length === 0 && employee !== undefined) {
      employeeFirst.push(employee)
    }
  })

  const employeeOne = document.querySelector('#employee-one')
  employeeOne.setAttribute('src', employeeFirst[0].full)

  const employeeTwo = document.querySelector('#employee-two')
  employeeTwo.setAttribute('src', employeeSecond[0].full)

  const employeeThree = document.querySelector('#employee-three')
  employeeThree.setAttribute('src', employeeThird[0].full)

  const oneName = document.querySelector('#one-name')
  oneName.textContent = employeeFirst[0].first_name + ' ' + employeeFirst[0].last_name

  const twoName = document.querySelector('#two-name')
  twoName.textContent = employeeSecond[0].first_name + ' ' + employeeSecond[0].last_name

  const threeName = document.querySelector('#three-name')
  threeName.textContent = employeeThird[0].first_name + ' ' + employeeThird[0].last_name

  const oneTitle = document.querySelector('#one-title')
  oneTitle.textContent = employeeFirst[0].title

  const twoTitle = document.querySelector('#two-title')
  twoTitle.textContent = employeeSecond[0].title

  const threeTitle = document.querySelector('#three-title')
  threeTitle.textContent = employeeThird[0].title
}

module.exports = { selectThree, filterForThree, applyAttributes }

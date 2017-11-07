(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const { selectThree, filterForThree, applyAttributes } = require('./utility')

Promise.all([
  fetch('https://techi.envivent.com/names.json')
    .then(res => res.json())
    .then(result => result.employees),
  fetch('https://techi.envivent.com/description.json')
    .then(res => res.json())
    .then(result => result.employees),
  fetch('https://techi.envivent.com/images.json')
    .then(res => res.json())
    .then(profiles => {
      const folder = profiles['images-folder']
      return profiles.employees.reduce((employees, { id, light, full }) => {
        return employees.concat({
          id,
          light: `${folder}${light}`,
          full: `${folder}${full}`
        })
      }, [])
    })
]).then(profiles => {
  const fullProfiles = []
  for (var i = 0; i < profiles[0].length; i++) {
    fullProfiles.push(
      Object.assign({}, profiles[0][i], profiles[1][i], profiles[2][i])
    )
  }
  const threeArr = selectThree()
  const threeRandom = filterForThree(fullProfiles, threeArr)

  applyAttributes(threeRandom)
})

},{"./utility":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);

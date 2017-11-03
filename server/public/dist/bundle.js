(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const { selectThree, filterForThree } = require('./utility')
const randomThreeIds = []

Promise.all([
  fetch('https://techi.envivent.com/names.json')
    .then(res => res.json())
    .then(names => {
      const employees = names.employees
      const employeeNames = employees.map(name => {
        return {
          id: name.id,
          name: name.first_name + ' ' + name.last_name
        }
      })
      return employeeNames
    }),
  fetch('https://techi.envivent.com/description.json')
    .then(res => res.json())
    .then(descriptions => {
      const employees = descriptions.employees
      const employeeDescriptions = employees.map(employee => {
        return {
          id: employee.id,
          title: employee.title,
          description: employee.description
        }
      })
      return employeeDescriptions
    }),
  fetch('https://techi.envivent.com/images.json')
    .then(res => res.json())
    .then(images => {
      const path = images['images-folder']
      const employees = images.employees
      const employeeImages = employees.map(employee => {
        const id = employee.id
        const url = path + employee.full
        return {
          id: id,
          url: url
        }
      })
      return employeeImages
    }, [])
]).then(data => {
  const combinedArray = data[0].concat(data[1], data[2])
  const threeArr = selectThree()
  const randomThree = filterForThree(combinedArray, threeArr)
  randomThree.forEach(item => {
    if(item !== undefined) {
      randomThreeIds.push(item)
    }
  })
})
console.log(randomThreeIds)

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

},{}]},{},[1]);

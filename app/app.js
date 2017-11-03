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

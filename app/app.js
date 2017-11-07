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

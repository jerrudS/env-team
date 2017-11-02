function fetchImages() {
  fetch('/images', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log('ERROR', err)
    })
}

function fetchDescriptions() {
  fetch('/descriptions', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log('ERROR', err)
  })
}

function fetchNames() {
  fetch('/names', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log('ERROR', err)
  })
}

fetchImages()
fetchDescriptions()
fetchNames()

const $app = document.querySelector('#app')
console.log($app)
const $h1 = document.createElement('h1')

$h1.textContent = 'Hi there'
console.log($h1)
$app.appendChild($h1)

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

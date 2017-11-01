(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);

'use strict'

const $ = (slt) => document.querySelector(slt)
const $input = $('.url-input')
const $btn = $('.demo-button')
const $vid = $('.demo-video')

$btn.addEventListener('click', e => {
  e.preventDefault()

  const url = encodeURIComponent($input.value)
  $vid.src = `/video/${url}`
  $vid.play()
})

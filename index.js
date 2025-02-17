const lenMessageEl = document.getElementById("len-message")
const volumeMessageEl = document.getElementById("volume-message")
const massMessageEl = document.getElementById("mass-message")
const numEl = document.getElementById("num-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener('click', function() {
    lenMessageEl.textContent = `${numEl.value} metre = ${metreToFeet(numEl.value)} feet | ${numEl.value} feet = ${feetToMetre(numEl.value)} metre`
    volumeMessageEl.textContent = `${numEl.value} litre = ${litreToGallon(numEl.value)} gallon | {numEl.value} gallon = ${gallonsToLitres(numEl.value)} litre`
    massMessageEl.textContent = `${numEl.value} kilogram = ${kilogramToPound(numEl.value)} pound | ${numEl.value} pound = ${poundToKilogram(numEl.value)} kilogram`
})

const oneMetreToFeet = 3.28084
const oneLitreToGallon =  0.264172
const oneKilogramToPound = 2.2046
const oneFeetToMetre = 0.3048
const oneGallonToLitre = 3.78541
const onePoundToKilogram = 0.45359237

function metreToFeet(num) {
    return (num * oneMetreToFeet).toFixed(3)
}

function litreToGallon(num) {
    return (num * oneLitreToGallon).toFixed(3)
}

function kilogramToPound(num) {
    return (num * oneKilogramToPound).toFixed(3)
}

function feetToMetre(num) {
    return (num * oneFeetToMetre).toFixed(3)
}

function gallonsToLitres(num) {
    return (num * oneGallonToLitre).toFixed(3)
}

function poundToKilogram(num) {
    return (num * onePoundToKilogram).toFixed(3)
}
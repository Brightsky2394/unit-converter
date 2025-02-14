const lenMessageEl = document.getElementById("len-message")
const volumeMessageEl = document.getElementById("volume-message")
const massMessageEl = document.getElementById("mass-message")
const numEl = document.getElementById("num-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener('click', function() {
    lenMessageEl.textContent = `${numEl.value} metre = ${metreToFeet(numEl.value)} feet`
    volumeMessageEl.textContent = `${numEl.value} litre = ${litreToGallon(numEl.value)} gallon`
    massMessageEl.textContent = `${numEl.value} kilogram = ${kilogramToPound(numEl.value)} pound`
})

const oneMetreToFeet = 3.28084
const oneLitreToGallon =  0.264172
const oneKilogramToPound = 2.2046

function metreToFeet(num) {
    return (num * oneMetreToFeet).toFixed(3)
}

function litreToGallon(num) {
    return (num * oneLitreToGallon).toFixed(3)
}

function kilogramToPound(num) {
    return (num * oneKilogramToPound).toFixed(3)
}

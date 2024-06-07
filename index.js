let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

function increment() {
    count++
    countEl.textContent = count;
}

function saveCount() {
    let saveVal = count + ' - '
    saveEl.textContent += saveVal
    count = 0
    countEl.textContent = 0
}

let key = prompt("Set a key")
let value = prompt("Set a value")

sessionStorage.setItem(key, value)

console.log(` ${key} : ${sessionStorage.getItem(key)}`)

sessionStorage.clear();
console.log(` ${key} : ${sessionStorage.getItem(key)}`)

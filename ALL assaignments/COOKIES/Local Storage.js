
let key = prompt("Set a key")
let value = prompt("Set a value for the given key")

localStorage.setItem(key, value)

console.log(` ${key} : ${localStorage.getItem(key)}`)


if(key == "Mohith" || key == "Prabhas"){
    localStorage.removeItem(key)
}

console.log(` ${key} : ${localStorage.getItem(key)}`)
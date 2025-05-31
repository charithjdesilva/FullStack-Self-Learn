let firstName = 'Jane'
let lastName = 'Doe'
let country = 'Sri Lanka'
let city = 'Galle'
let age = '28'
let isMarried = false
let alyear = 2018

console.log(typeof '10' == typeof 10)

console.log(parseInt('9.8') == 10)

console.log(false == 0)
console.log(undefined == null)
console.log(0 == '')

console.log(0 != ' ')
console.log(5 > 6)
console.log(-5 < -6)

console.log('python'.length !== 'jargon'.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!'python'.includes('on') && !'jargon'.includes('on'))

const currentDate = new Date()
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getTime());
console.log(Date.now());
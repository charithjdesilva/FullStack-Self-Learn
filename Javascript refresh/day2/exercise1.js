let challenge = '30 Days Of JavaScript'

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(0,2))

console.log(challenge.substring(3, challenge.length-1))

console.log(challenge.includes('Script'))

let challengeArr = challenge.split('')

console.log(challengeArr)

let challengeArrSp = challenge.split(' ')

console.log(challengeArrSp)

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

let companyArr = company.split(', ')

console.log(companyArr)

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(challenge.indexOf('J')))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let question17 = 'You cannot end a sentence with because because because is a conjunction'

console.log(question17.indexOf('because'))

console.log(question17.lastIndexOf('because'))

console.log(question17.search('because'))

console.log(' 30 Days Of JavaScript '.trim())

console.log(challenge.startsWith('30 Days Of JavaScript'))
console.log(challenge.endsWith('30 Days Of JavaScript'))

console.log(challenge.match(/a/gi))

let firstPart = '30 Days of'
console.log(firstPart.concat(' ', 'JavaScript'))

console.log(challenge.repeat(2))
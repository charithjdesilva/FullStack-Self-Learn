console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

console.log('10' === 10)
console.log(parseInt('10') === 10)

console.log(parseFloat('9.8') === 9.8)

console.log('jargon'.includes('on'))
console.log('jargon'.match('on'))

console.log('python'.includes('on'))
console.log('python'.match('on'))

console.log(`I hope this course is not full of jargon`.includes('jargon'))

let randomNum0to100 = Math.random()*100
console.log(randomNum0to100)

let randomNum50to100 = Math.random()*50 + 50
console.log(randomNum50to100)

let randomNum0to255 = Math.round(Math.random() * 255)
console.log(randomNum0to255)

let randomChallenge = 'JavaScript'
let randomChallengeCharIndex = Math.floor(Math.random()*(randomChallenge.length))
let randomChallengeChar = randomChallenge[randomChallengeCharIndex]
console.log(randomChallengeChar)

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

let challenge12 = 'You cannot end a sentence with because because because is a conjunction'

console.log(challenge12.substr(challenge12.indexOf('because'),challenge12.lastIndexOf('because')-challenge12.indexOf('because')+'because'.length))

let challenge3_1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi

console.log(challenge3_1.match(pattern).length)

let challenge3_2 = 'You cannot end a sentence with because because because is a conjunction'
let pattern2 = /because/g
console.log(challenge3_2.match(pattern2).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanPattern = /[%@$;#!&]/g
console.log(sentence.replace(cleanPattern,''))

let challenge3_4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let digitPattern = /\d+/g

let incomeArr = challenge3_4.match(digitPattern)
let total = 0

for (let index = 0; index < incomeArr.length; index++) {
    total += parseInt(incomeArr[index]);
}
console.log(total)

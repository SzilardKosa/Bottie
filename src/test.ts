let text: string = 'Hi bottie!😳'

// inlcude test
let reg: RegExp = /bottie/
console.log(reg.test(text))

// equal test
let reg2: RegExp = /^bottie$/
console.log(reg2.test(text))

// emoji test
let reg3: RegExp = /😳/
console.log(reg3.test(text))

// or test
let reg4: RegExp = /Hi b|bottie/
console.log(reg4.test(text))

// and test
let reg5: RegExp = /Hi.*bottie|bottie.*Hi/
console.log(reg5.test(text))

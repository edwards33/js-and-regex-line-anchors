var text01 = `13/1/19
13-19-13
20/11/19
13-12-2019
`

var regex01 = /^13/g
var regex02 = /^13/gm // m -> can include line break
var regex03 = /^13.+19$/gm //and 19 at the end of line

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}
console.log('\nregex01:')
loop(text01, regex01)

console.log('\nregex02:')
loop(text01, regex02)

console.log('\nregex03:')
loop(text01, regex03)

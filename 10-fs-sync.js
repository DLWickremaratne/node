const { readFileSync, writeFileSync /*methods*/} = require('fs')  
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
//if file is not there node will create one , 
//if the file is already there node by default overwite all values that are in the file 
//flag will create new file 

console.log('done with this task')
console.log('starting the next one')
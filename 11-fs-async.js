const { readFile, writeFile } = require('fs')
//get the module with requre
//can also append file 
//can also delete file with unlink
console.log('start')

//first parameter - name of the file 
//second - type of the file or format of the file or encoding
//third - callback

//non-blocking i/o - when say read file it make some time dont want to stop the execution ,
//read file process is going on and then in the back end continue with statements 
//call back function has two parameters 
//first - error
//second - data
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
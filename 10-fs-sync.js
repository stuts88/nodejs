const{readFile, writeFile} = require('fs');

console.log('start')

readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    // console.log(first)
    console.log('read second')
    readFile('./content/second.txt','utf-8',(err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = data;
        console.log(second)
        writeFile(
            './content/result-async.txt',
            'Here we go:' + first + second,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return;
                }
                console.log('done with this task') 
            })
    })
})
console.log('starting next task')

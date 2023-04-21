const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []
let output = []
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    [...str].forEach((s)=>{
        if(s.match(new RegExp(/^[a-z]/))){
            output.push(s.toUpperCase())
           
        }else{
            output.push(s.toLowerCase())
       
        }
    })
    console.log(output.join(''))
});
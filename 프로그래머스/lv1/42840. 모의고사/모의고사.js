function solution(answers) {
    var answer = [];
    // give up on Math
    let gum1 = '12345'
    let gum2 = '21232425'
    let gum3 = '3311224455'

    // loop
    let gum1answer = gum1.repeat(Math.ceil(answers.length/gum1.length))
    let gum2answer = gum2.repeat(Math.ceil(answers.length/gum2.length))
    let gum3answer = gum3.repeat(Math.ceil(answers.length/gum3.length))
    
    console.log(gum1answer, gum2answer, gum3answer)
    return answer;
}
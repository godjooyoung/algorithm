function solution(answers) {
    var answer = [];
    // give up on Math
    let gum1 = '12345'
    let gum2 = '21232425'
    let gum3 = '3311224455'

    // loop
    let gum1answer = [...gum1.repeat(Math.ceil(answers.length/gum1.length)).substr(0, answers.length)]
    let gum2answer = [...gum2.repeat(Math.ceil(answers.length/gum2.length)).substr(0, answers.length)]
    let gum3answer = [...gum3.repeat(Math.ceil(answers.length/gum3.length)).substr(0, answers.length)]

    let gum1Cnt = {name:1, cnt:0}
    let gum2Cnt = {name:2, cnt:0}
    let gum3Cnt = {name:3, cnt:0}

    answers.forEach(function(x,i){
        if(x==[...gum1answer][i]){
            gum1Cnt.cnt = gum1Cnt.cnt+1
        }
        if(x==[...gum2answer][i]){
            gum2Cnt.cnt = gum2Cnt.cnt+1
        }
        if(x==[...gum3answer][i]){
            gum3Cnt.cnt = gum3Cnt.cnt+1
        }
    })

    if((gum1Cnt.cnt == gum2Cnt.cnt) && (gum2Cnt.cnt == gum3Cnt.cnt)){
        return [1,2,3]
    }else if(gum1Cnt.cnt == gum2Cnt.cnt && gum2Cnt.cnt > gum3Cnt.cnt){
        return [1,2]
    }else if(gum2Cnt.cnt == gum3Cnt.cnt && gum3Cnt.cnt > gum1Cnt.cnt){
        return [2,3]
    }else if(gum1Cnt.cnt == gum3Cnt.cnt && gum3Cnt.cnt > gum2Cnt.cnt){
        return [1,3]
    }else{
        //한명만
        let returnArr = [gum1Cnt, gum2Cnt, gum3Cnt]
        returnArr.sort((a,b)=>{
           return a.cnt - b.cnt
        })
        return [returnArr[2].name]
    }
}

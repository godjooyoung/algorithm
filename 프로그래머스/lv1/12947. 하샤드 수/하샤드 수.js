function solution(x) {
    let isHarshad = true;
    let toString = String(x)
    let divisorNum = [...toString].reduce((accumulateVal,currentVal)=> Number(accumulateVal) + Number(currentVal))
    if(x%divisorNum === 0){
        isHarshad = true
    }else{
        isHarshad = false
    }
    
    return isHarshad;
}
function solution(bin1, bin2) {
    let dcemal1 =  parseInt(bin1, 2)
    let dcemal2 =  parseInt(bin2, 2)
    
    let answer =(dcemal1 + dcemal2).toString(2)
    return answer;
}

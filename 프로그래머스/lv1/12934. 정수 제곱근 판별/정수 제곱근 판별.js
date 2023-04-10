function solution(n) {
    var answer = 0;
    let x = Math.sqrt(n)

    
    console.log("제곱근처리후 : ",x)
    console.log("정수여부 : ",Number.isInteger(x))
    // 정수 판단
    // Number.integer()
    // 정수는 1로 나누면 나머지가 무조건 0이다.
    if(Number.isInteger(x) && x>0){
        answer = (x+1)*(x+1)
    }else{
        answer = -1
    }
    return answer;
}
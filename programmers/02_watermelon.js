function solution(n) {
    let cnt = Math.floor(n/2)   // 반복되어야 하는 횟수
    let str ='수박'.repeat(cnt)  // 반복
    if(n%2 !== 0){
        str = '수박'.repeat(cnt) +'수'
    }
    return str;
}
console.log(solution(13)) // 함수 호출
function solution(a, b) {
    var answer = 0
    for(i=0; i<a.length; i++){
        answer = answer + (a[i]*b[i])
    }
    return answer
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])) // 함수 실행
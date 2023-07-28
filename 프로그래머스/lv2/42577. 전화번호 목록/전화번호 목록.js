function solution(phone_book) {
    var answer = true
    // 정확한 숫자값 비교가 아니라 문자열 일치 비교이므로 일반 솔트를 바로 사용한다.
    phone_book.sort()
    console.log(">>", typeof phone_book[0])
    for(i=0; phone_book.length>i; i++){
        if(i+1 !== phone_book.length){
            if(String(phone_book[i+1]).startsWith(phone_book[i])){
                answer = false
                break
            }
        }   
    }
    
    return answer
}
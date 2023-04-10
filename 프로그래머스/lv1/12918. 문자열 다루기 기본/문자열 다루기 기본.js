function solution(s) {
    // 길이 확인 (4또는 6)
    // 전부 숫자인지 확인 (나누었을때 NaN이 나오면 숫자가 아님, NaN은 Falsy한 값) isNaN 숫자면 false 숫자가 아니면 true
    console.log("숫자 판단1 : ",typeof (+"1e22")) // 1e22, 알파벳 e가 포함되어서 지수형으로 판단 가능한 문자열이 들어오면 문제가 생김
    if(s.length === 4 || s.length === 6){
        let strArr = [...s].filter(function(x){
            return isNaN(x/1)
        })
        
        if(strArr.length > 0){
            return false
        }else{
            console.log(">>>",strArr)
            return true
        }
    }else{
        return false
    }
}
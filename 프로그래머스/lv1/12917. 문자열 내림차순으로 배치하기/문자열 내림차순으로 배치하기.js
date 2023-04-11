function solution(s) {
    var answer = '';
    let strArr = [...s]
    strArr.sort(function(a,b){
        if(a>b){
            return -1
        }else{
            return 1
        }
        return 0
    })
    console.log(strArr)
    return strArr.join('');
}
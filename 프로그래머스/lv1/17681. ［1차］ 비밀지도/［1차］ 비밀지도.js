function solution(n, arr1, arr2) {
    var answer = [];
    let lockMapStr = ''
    let keyMapStr = ''
    arr1.forEach(function(x,i){
        if(x.toString(2).length < n){
            // n보다 길이가 작은 경우 0 채워서 리턴        
            lockMapStr = lockMapStr + ('0'.repeat(n-(x.toString(2).length))+x.toString(2))
        }else{
            lockMapStr = lockMapStr + (x.toString(2))
        }
    })
    arr2.forEach(function(x,i){
        if(x.toString(2).length < n){
            // n보다 길이가 작은 경우 0 채워서 리턴        
            keyMapStr = keyMapStr + ('0'.repeat(n-(x.toString(2).length))+x.toString(2))
        }else{
            keyMapStr = keyMapStr + (x.toString(2))
        }
    })

    let returnStr = ''
    lockMapStr = lockMapStr.split('')
    keyMapStr = keyMapStr.split('')

    lockMapStr.forEach(function(x,i){
        if(x+keyMapStr[i]>0){
            returnStr = returnStr+'#'
        }else{
            returnStr = returnStr+' '
        }
    })
    
    console.log(returnStr)
    for(let i=0; i<n; i++){
        answer.push(returnStr.substr(i*n, n))
    }
    
    
    return answer;
}

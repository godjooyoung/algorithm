function solution(x, n) {
    let numArr = [];
    let startNum = x;
    for(i=0; i<n; i++){
        numArr.push(startNum)
        startNum = startNum + x
    }
    return numArr;
}
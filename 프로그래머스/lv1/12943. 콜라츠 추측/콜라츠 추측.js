function solution(num) {
    let totalCnt = 0;
    let tempNum = num;
    if(num === 1){
        totalCnt = 0;
    }else{
        console.log("1아님")
        do{
            if(tempNum%2 === 0){ // 짝수
                tempNum=tempNum/2
            }else{          // 홀수
                tempNum=tempNum*3+1 
            }
            totalCnt = totalCnt+1
        }while(tempNum !== 1)
        if(totalCnt > 500){
            totalCnt = -1
        }
    }
    return totalCnt;
}
function solution(num) {
    let totalCnt = 0;
    let tempNum = num;
    if(num === 1){
        totalCnt = 0;
    }else{
        do{
            if(tempNum%2 === 0){
                tempNum=tempNum/2
            }else{          
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
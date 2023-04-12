function solution(lottos, win_nums) {
    let confusedNumArr = [];
    let clearNumArr =[];
    let clearcurrectCnt = 0;
    confusedNumArr = lottos.filter((lottosNum) =>{
        return lottosNum === 0
    })
    clearNumArr = lottos.filter((lottosNum) =>{
        return lottosNum !== 0
    })
    
    // lottos와 당첨 숫자와 비교 일치하는 개수 찾기
    clearNumArr.forEach((x)=>{
        if(win_nums.indexOf(x) !== -1){
            clearcurrectCnt = clearcurrectCnt+1;
        }else{
            clearcurrectCnt = clearcurrectCnt;
        }
    })
        
    let minCurrenCnt = clearcurrectCnt;
    let maxCurrenCnt = clearcurrectCnt + confusedNumArr.length;
    let min = 6;
    let max = 6;
    // 순위 구하기
    switch(minCurrenCnt) {
        case 6:
          min = 1
          max = 1
        break
        case 5:
          min = 2
        break
        case 4:
          min = 3
        break
        case 3:
          min = 4
        break
        case 2:
          min = 5
        break                 
        default:
          min =6
        break
    }
    switch(maxCurrenCnt) {
        case 6:
          max = 1
        break
        case 5:
            max = 2
        break
        case 4:
            max = 3
        break
        case 3:
            max = 4
        break
        case 2:
            max = 5
        break                 
        default:
            max =6
        break
    }

    return [max, min];
}

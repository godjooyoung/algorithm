function solution(progresses, speeds) {
    let answer = [] 
    let taskCnt = progresses.length // 최초 작업
    let doneCnt = 0 // 하루에 배포한 작업
    while(answer.reduce((acc, curr)=>acc + curr,0) != taskCnt){
        doneCnt = 0
        progresses = progresses.map((item, idx)=>{
            return item+speeds[idx]
        })
        console.log("작업완료>>", progresses)
        for(let i=0; i < progresses.length; i++){
           if(progresses[i]<100){
               break;
           }else{
               doneCnt = doneCnt + 1
           }
        }
        
        if(doneCnt > 0){
            answer.push(doneCnt)
            progresses.splice(0, doneCnt)
            speeds.splice(0, doneCnt)
            console.log("작업한 건 제거>>", progresses)
        }
    }    
    
    return answer;
}
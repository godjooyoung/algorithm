function solution(s) {
    
    const matchEng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine']
    /* 
        isNaN(값) 
        값이 숫자면 false/ 값이 숫자가 아니면 true return
     */
    
     while(isNaN(s/1)){
        matchEng.map((x,i)=>{
            s = s.replace(x,i)
        })
     }
    
    return Number(s);
}
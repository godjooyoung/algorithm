function solution(s) {
    const matchEng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine']
    
    while(isNaN(s/1)){
        matchEng.map((x,i)=>{
            s = s.replace(x,i)
        })
    }
    
    return Number(s);
}
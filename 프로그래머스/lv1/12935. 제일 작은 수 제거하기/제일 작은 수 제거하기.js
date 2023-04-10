function solution(arr) {
    let answer = [];
    let sortedArr = [];
    if(arr.length != 1){
        const mapped = arr.map((v, i) => {
            return { i, value: v};
        });       
        sortedArr = mapped.sort((x,y)=>{
            if(x.value > y.value){
                return 1
            }else if(x.value < y.value){
                return -1
            }
            return 0
        })
        
        arr.splice(sortedArr[0].i, 1)
    }else{
        return [-1]
    }
    return arr;
}
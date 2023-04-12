function solution(numbers) {
    let sum = 0; //배열의 현재값과 다음값을 연산
    
    console.log(numbers)
    let sumArr = []
    numbers.map((x,idx)=>{
        for(let i=idx+1; i<numbers.length; i++){
            console.log("x," ,x,"idx," ,idx,"i," ,i,"numbers[i]," ,numbers[i], "sum,",x+numbers[i])
            sum = x+numbers[i]
            sumArr.push(sum)
        }
    })
    let answer = new Set(sumArr)
    answer = [...answer]
    answer.sort((a,b)=>(a-b))
    return answer;
}

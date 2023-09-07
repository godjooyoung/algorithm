function solution(n, lost, reserve) {
    var answer = 0;
    let tagetOne
    let tagetTwo
    let save = 0;
    let firstSize;
    let secSize;
    
    lost.sort((a, b)=>{
        return a - b
    })
    // 여벌이 있는 학생 중 도난 당한 학생은 다른 학생에게 빌려 줄 수 없다.
    lost.map((x)=>{
        if(reserve.indexOf(x) != -1){
            lost = lost.filter((stu)=>{
                return stu != x
            })
            reserve = reserve.filter((stu)=>{
                return stu !=x
            })
        }
    }) 

    lost.map((stu)=>{
        tagetOne = stu-1
        tagetTwo = stu+1
        // 빌릴수 있는 첫번째 첫번째 친구에게 빌린다.
        firstSize = reserve.length
        reserve = reserve.filter((x)=>{
            return x != tagetOne
        })
        secSize = reserve.length
        if(firstSize == secSize){
            firstSize = reserve.length
            reserve = reserve.filter(x=>{
                return x != tagetTwo
            })
            secSize = reserve.length
            if(firstSize != secSize){
                save = save+1
            }
        }else{
            save = save+1
        }
    })

    answer = n-lost.length+save
    return answer;
}

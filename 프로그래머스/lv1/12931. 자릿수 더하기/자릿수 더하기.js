function solution(n) {
    let retrunNum = 0;
    n = String(n)
    n = [...n]
    n.forEach((strN)=>{
        retrunNum = retrunNum + Number(strN)
    })

    return retrunNum
}
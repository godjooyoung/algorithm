function solution(arr, divisor) {
    let returnMap=[]
    let mapped = arr.map((x)=>(x%divisor===0?{x,isDivisible : true}:{x,isDivisible : false}))
    mapped.sort((a,b)=>(a.x-b.x)).map(function(a){
        if(a.isDivisible){
            returnMap.push(a.x)
        }
    })
    return returnMap.length === 0?[-1]:returnMap
}
function solution(sizes) {
    var answer = 0;
    var longArr= new Array;
    var shortArr= new Array;
    var lMax;
    var sMax;
    let wTemp;
    let hTemp;
    for(i=0; i<sizes.length; i++){
        wTemp = sizes[i][0];
        hTemp = sizes[i][1];
        if(wTemp > hTemp){ 
longArr.push(wTemp)         
shortArr.push(hTemp)         
}else{
longArr.push(hTemp)
shortArr.push(wTemp)
}
}

longArr.sort(function(a,b){
if(a>b){
return 1
}
if(a<b){
    return -1
}
            
            return 0})
shortArr.sort(function(a,b){
if(a>b){
return 1
}
if(a<b){
    return -1
}
            
            return 0})
let endIdx = sizes.length-1
    
lMax =longArr[endIdx]
sMax = shortArr[endIdx]
   
answer = lMax*sMax
    return answer
}
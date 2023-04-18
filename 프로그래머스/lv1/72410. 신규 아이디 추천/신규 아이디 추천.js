function solution(old_id) {
    let answer =''
    let id = old_id.toLowerCase() //1단계
    id = id.replace(/[^a-z0-9_.-]/gi, "") // 2단계
    while( id.includes('..') ){
        id =id.replace('..', '.') // 3단계 
    }
    if(id[0] === '.'){
        id = id.substr(1)
    }
    if(id[id.length-1] === '.'){
        id = id.slice(0,-1)
    }
    if(id.length === 0){
        id = 'a'
    }
   
    if(id.length > 15){
        id = id.substr(0, 15)
        while(id[id.length-1] === '.'){
            id = id.slice(0,-1)
        }    
    }
    console.log(">>>6단계 결과", id)
    if(id.length < 3){        
        id = id+id.slice(-1).repeat(3-id.length)
    }

    answer = id
    return answer;
}
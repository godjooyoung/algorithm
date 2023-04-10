function solution(string) {
    var answer = ''
    var wordArr = string.split(' ') // 단어 배열
    let returnString = []
    wordArr.forEach((word) => {
        let sArr = [...word]        // 문자 배열
        let returnWord = []
        sArr.forEach((s,i)=>{ 
            if(i === 0 || i%2 === 0){
                returnWord.push(s.toUpperCase())
            }else{
                returnWord.push(s.toLowerCase())
            }
        })
        returnWord = returnWord.join('')
        returnString.push(returnWord)
    })
    returnString = returnString.join(' ')
    console.log(returnString)
    return returnString;
}
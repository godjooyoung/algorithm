function solution(spell, dic) {
	let answer = 2;
	dic.map((word)=>{
		console.log("단어확인 시작:", " word",word,"/ spell", spell)
		if(word.length == spell.length){
			console.log("단어확인 시작:", " word",word,"/ spell", spell)
			for(i=0; i<spell.length; i++){
				word = word.replace(spell[i],'')
			}
			if(word.length === 0){
				answer = 1
			}
			
		}
	})
	return answer;
}
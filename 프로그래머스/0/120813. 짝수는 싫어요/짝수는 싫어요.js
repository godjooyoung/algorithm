function solution(n) {
	let answer = []
	for(i=1; i<=n; i++){
		if(i%2 !== 0){
			answer.push(i)
		}
	}
	return answer
}
function solution(array) {
	let answer = 0;

	// reduce 활용 초기값을 빈 객체로 지정해주고 숫자값으로 키값을 지정하고 키값에 해당하는 카운트를 추가해준다.
	let cnts = array.reduce((acc, curr) => { 
		acc[curr] = (acc[curr]||acc[curr]==0)?acc[curr]+1:1
		return acc
	}, {})
	

	// 객체를 순환하면서 해당 키 값에 해당하는 출현횟수를 확인한다.
	// 확인된 출현횟수는 answer에 저장한다. 만약 출현횟수가 동일하다면 -1을 리턴한다.
	Object.keys(cnts).reduce((acc, curr)=>{
		if(cnts[curr] > acc){
			acc = cnts[curr]
			answer = Number(curr)
		}else if(cnts[curr] == acc){
			acc = cnts[curr]
			answer = -1
		}
		return acc
	}, -1)

	return answer;
}

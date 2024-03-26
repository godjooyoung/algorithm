function solution(numer1, denom1, numer2, denom2) {
	let answer = [];
	let numer = (numer1 * denom2) + (numer2 * denom1)
	let denom = denom1 * denom2

    // 1/5 + 4/5 케이스 때문에 주석처리
	// if(denom%numer === 0){
	// 	numer = 1 //분자
	// 	denom = denom/numer //분모
	// }else{
		let devide // 최대공약수 
		let bigger, smaller, remain
		if (denom > numer){
			bigger = denom
			smaller = numer
		}else {
			bigger = numer
			smaller = denom
		}

		// 최대공약수 찾기
		do {
			remain = bigger % smaller
			if(remain === 0){
				devide = smaller
			}else {
				bigger = smaller
				smaller = remain
			}
		}while(remain !== 0)

		numer = numer/devide //분자
		denom = denom/devide //분모
	// }

	answer.push(numer)
	answer.push(denom)

	return answer;
}

function solution(participant, completion) {
    /**
     * participant 참석자 명단
     * completion 완주자 명단
     */
    let nonFinisher = '' // 완주하지 못한 선수
    participant = participant.sort()
    completion = completion.sort()
    for(i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            nonFinisher = participant[i] 
            // 무조건 참석자와 완주자는 1만큼 차이가 남, 따라서 같은 순서로 정렬을 하고 순서가 다른 첫번째가 바로 미완주자 이름
            break;
        }
    }
    return nonFinisher;
}
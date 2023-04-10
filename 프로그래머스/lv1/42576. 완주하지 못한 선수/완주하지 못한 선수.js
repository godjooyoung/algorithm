function solution(participant, completion) {
    
    /**
     * participant 참석자 명단
     * completion 완주자 명단
     */
    let nonFinisher = ''
    participant = participant.sort()
    completion = completion.sort()
    for(i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            nonFinisher = participant[i]
            break;
        }
    }
    
    return nonFinisher;
}
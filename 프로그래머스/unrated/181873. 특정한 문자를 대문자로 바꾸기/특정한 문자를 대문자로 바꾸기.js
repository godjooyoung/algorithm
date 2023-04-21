function solution(my_string, alp) {
    while(my_string.includes(alp)){
        my_string = my_string.replace(alp, alp.toUpperCase())
    }
    return my_string;
}
var score = 89;
function level(s){
    return 10 - Math.floor(s/10)%10;
}
console.log(level(score));
// Only change code below this line
function sumFibonacci(num){
    if(num < 0) {
        return 0;
    }

    var sum = 0;
    if(num > 0) { 
        sum = 1;
    }

    var niz = [0,1];
    var trenutniClan = 0;
    var i = 2;
    while(trenutniClan < num) {
        trenutniClan = niz[i-1] + niz[i-2];
        niz.push(trenutniClan);
        if(trenutniClan < num && trenutniClan % 2 === 1){
            sum += trenutniClan;
        }
        i++;
    }

    return sum;
}
// Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;

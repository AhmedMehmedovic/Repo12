// Only change code below this line
function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        var brojac = myCounter(n-1);
        brojac.unshift(n);
        return brojac;
    }        
}
// Only change code above this line
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;
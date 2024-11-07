function countNum(a) {
    var count = 0;
    while (a != 0) {
        a = Math.floor(a / 10);
        count++;
    }
    return count;
}

console.log(countNum(105));
console.log(countNum(1050));

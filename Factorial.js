function fact(n){
    var x = 1;
    for(var i = 1;i <= n;i ++)
        x *= i;
    return x;
}

console.log(fact(5));
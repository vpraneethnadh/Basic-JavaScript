function lcm(a, b) {
    var max = 0;
    if(a > max)
        max = a;
    else
        max = b;
    var lcm = max;
    while(lcm % a != 0 && lcm % b != 0)
        lcm += max;
    return lcm;
}

console.log(lcm(10, 5));

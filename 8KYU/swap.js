function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
    return args;
}
console.log(swapValues([1,2]));
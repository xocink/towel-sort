
exports.min = function min(array = 1) {
    if (arguments.length == 0) return 0
    if (Array.isArray(array) && array.length == 0) return 0;
    return Math.min(...array)
}


exports.max = function max(array) {
    if (arguments.length == 0) return 0;
    if (Array.isArray(array) && array.length == 0) return 0;
    if (array == undefined) return 0;
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (arguments.length == 0) return 0;
    if (Array.isArray(array) && array.length == 0) return 0;
    if (array == undefined) return 0;
    let value = array.reduce(function (prev, curr) {
        return (prev + curr)
    });
    return value / array.length;
}

// You should implement your task here.

module.exports = function towelSort(matrix = 1) {
    if (matrix !== 1) {
        let new_arr = [];
        if (matrix == []) return [];
        for (let i = 0; i < matrix.length; i++) {
            let arr = matrix[i]
            if (i % 2 == 0) {
                new_arr = new_arr.concat(matrix[i])
            } else {
                arr = arr.reverse()
                new_arr = new_arr.concat(arr)
            }
        }
        return new_arr
    } else return []
}

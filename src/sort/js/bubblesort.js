function bubbleSort(list) {
    let n = list.length
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < n-1; i++) {
            if (list[i] > list[i+1]) {
                [ list[i], list[i+1] ] = [ list[i+1], list[i] ]
                sorted = false
            }
        }
    }
    return list
}

console.log(
    bubbleSort(process.argv.slice(2).map(Number)).join(" ")
)
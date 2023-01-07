function selectionSort(list) {
    let n = list.length
    console.log(n)
    for (let i = 1; i < n; i++) {
        let jMin = i
        for (let j = i+1; j < n; j++) {
            if (list[j] < list[jMin]) jMin = j
            //console.log(list)
        }
        if (jMin !== i) [ list[i], list[jMin] ] = [ list[jMin], list[i] ]
    }
    return list
}

console.log(
    selectionSort(process.argv.slice(2).map(Number)).join(" ")
)
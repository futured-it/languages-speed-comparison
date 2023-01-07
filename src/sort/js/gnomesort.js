function gnomeSort(list) {
    let pos = 0
    while (pos < list.length) {
        if (pos == 0 || list[pos] >= list[pos-1]) pos += 1 
        else {
            [ list[pos], list[pos-1] ] = [ list[pos-1], list[pos] ]
            pos -= 1
        }
    }
    return list
}

console.log(
    gnomeSort(process.argv.slice(2).map(function (x) { 
        return parseInt(x, 10); 
    })).join(" ")
)
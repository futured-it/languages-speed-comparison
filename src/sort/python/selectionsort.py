from sys import argv

def selectionSort(list):
    n = len(list)
    for i in range(1, n, 1):
        jMin = i
        for j in range(i+1, n, 1):
            if (list[j] < list[jMin]):
                jMin = j
        if (jMin != i):
            list[i], list[jMin] = list[jMin], list[i]
    return list

print(*selectionSort([ int(x) for x in argv[1:] ]))
from sys import argv

def bubbleSort(list):
    n = len(list)
    sorted = False
    while (not sorted):
        sorted = True
        for i in range(n-1):
            if (list[i] > list[i+1]):
                list[i], list[i+1] = list[i+1], list[i]
                sorted = False
    return list

print(*bubbleSort([ int(x) for x in argv[1:] ]))
from sys import argv

def gnomeSort(list):
    pos = 0
    while pos < len(list):
        if (pos == 0) or (list[pos] >= list[pos-1]):
            pos += 1
        else:
            list[pos], list[pos-1] = list[pos-1], list[pos]
            pos -= 1
    return list

print(*gnomeSort([ int(x) for x in argv[1:] ]))
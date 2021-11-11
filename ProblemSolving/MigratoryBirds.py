def migratoryBirds(arr):
    One = Two = Three = Fore = Five = 0
    for i in arr:
        if i == 1:
            One += 1
        elif i == 2:
            Two += 1
        elif i == 3:
            Three += 1
        elif i == 4:
            Fore += 1
        else:
            Five += 1
    allOf = [One, Two, Three, Fore, Five]
    Id = max(allOf)
    return allOf.index(Id)+1

def Second(arr):
    AllOf = [0]*5
    for i in arr:
        AllOf[i-1] += 1
    return AllOf.index(max(AllOf))+1

if __name__ == '__main__':
    arr = [1, 4, 4, 4, 5, 3]
    print(migratoryBirds(arr))
    print(Second(arr))
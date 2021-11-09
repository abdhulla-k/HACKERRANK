def Second(s,d,m):
    count = 0
    k = len(s)-m+1
    for i in range(k):
        num = 0
        for j in range(i,i+m):
            num += s[j]
        if num == d:
            count += 1
    return count


if __name__ == '__main__':
    s = [2, 5, 1, 3, 4, 4, 3, 5, 1 ,1, 2, 1, 4, 1, 3, 3, 4, 2, 1]
    m = 7
    d = 18

    print(Second(s, d, m))
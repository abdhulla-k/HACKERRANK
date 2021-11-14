def sockMerchant(n, ar):
    # Write your code here
    result = 0
    ar.sort()
    before = -1
    for i in ar:
        if i > before:
            before = i
            result += ar.count(i)//2
    return result

if __name__ == '__main__':
    n = 9
    ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    print(sockMerchant(n, ar))
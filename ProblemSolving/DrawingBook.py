def pageCount(n, p):
    return min(p//2,n//2-(p//2))
    

if __name__ == '__main__':
    n = 6
    p = 4
    print(pageCount(n, p))
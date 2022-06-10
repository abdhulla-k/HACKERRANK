def pageCount(n, p):
    return min(p//2,n//2-(p//2))

def Second(n,p):
    pageFromFront = 0
    pageFromBack = 0
    k = 0
    if p%2 == 0:
        pageFromFront = p // 2
        pageFromBack = (n-p) // 2
    elif p%2 != 0:
        pageFromFront = (p-1) // 2
        k = n-p
        if k%2 == 0:
            pageFromBack = k//2
        elif k%2 != 0:
            pageFromBack = (k+1) // 2
    if pageFromBack <= pageFromFront:
        return pageFromBack
    if pageFromBack > pageFromFront:
        return pageFromFront
    

if __name__ == '__main__':
    n = 6
    p = 4
    print(pageCount(n, p))
    print(Second(n,p))
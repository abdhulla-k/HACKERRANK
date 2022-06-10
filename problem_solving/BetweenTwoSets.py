def getTotalX(a, b):
    # Write your code here
    result = 0
    def FindAllFactors(b,a):
        AllFactorOfA = []
        MultyResister = set()
        for i in range(b[-1]+1):
            if i != 0:
                m = True
                for j in a:
                    if i%j != 0:
                        m = False
                    if i%j == 0 and j == a[-1] and a[-1] <= i <= b[0]:
                        MultyResister = AllFactorOfA
                        if MultyResister.__contains__(i):
                           break
                        else:
                            if m == True:
                              AllFactorOfA.append(i)
        def FindAllFactorsn(AllFactorOfA, b):
            AllFactor = []
            for i in AllFactorOfA:
                m = True
                for j in b:
                    if j%i != 0:
                        m =False
                    if j%i == 0 and j == b[-1]:
                        if m == True:
                          AllFactor.append(i)
            return len(AllFactor)
        return(FindAllFactorsn(AllFactorOfA, b))
    return(FindAllFactors(b,a))


def Second(a, b):
    result = 0
    for i in range(1,101):
        if all(i%j == 0 for j in a) and all(j%i == 0 for j in b):
            result += 1
    return(result)

def Thead(a,b):
    count = []
    for i in range(1,max(b)+1):
        if all(i%j == 0 for j in a) and all(j%i == 0 for j in b):
            count.append(i)
    return len(count)

if __name__ == '__main__':
    a = [2, 4]
    b = [16, 32, 96]
    print(getTotalX(a,b))
    print(Second(a,b))
    print(Thead(a,b))
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

if __name__ == '__main__':
    a = [2, 4]
    b = [16, 32, 96]
    print(getTotalX(a,b))
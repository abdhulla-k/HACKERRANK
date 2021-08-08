Data = [1,2,6,7,4,0,5]                      # complexity Analysis
Target = 10



def test(self,Targe):
    i = 0
    j = 1
    for i in range(len(self) - 1):          # in this case, O(n*n)T    O(1)S
        for j in range(len(self)):
            if i + j == Target:
                return i , j



def test2(Data,target):                     # in this case, O(n)T     O(n)S
    used = set()
    i = 0
    for i in range(len(Data)):
        num = Data[i]
        match = target - num
        if used.__contains__(num):
            return(num,match)
        else:
            used.add(num)


result = test2(Data,Target)
print(result)

result = test(Data,Target)
print(result)
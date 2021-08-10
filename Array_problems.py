"""oprations:  1.set
               2.get
               3.Traversal
               4.insert
               5.delete
               6.init        """
#====================================================================================================================

Data = [1,2,6,7,4,0,5]                      # complexity Analysis     S = space  and T = tiime
Target = 10


def test(self,Targe):
    i = 0
    j = 1
    for i in range(len(self) - 1):          # in this case, complexity is O(n*n)T    O(1)S
        for j in range(len(self)):
            if i + j == Target:
                return i , j

result = test(Data,Target) 
print("from test: "+ str(result))




def test_2(Data,target):                     # in this case, complexity is O(n)T     O(n)S
    used = set()
    i = 0
    for i in range(len(Data)):
        num = Data[i]
        match = target - num
        if used.__contains__(match):
            return(num,match)
        else:
            used.add(num)



result2 = test_2(Data,Target)
print("from test_2 : "+ str(result2))


print("=========================================================================================================== ")


Data_2 = [6,1,6,8,10,4,15,6,3,9,6]
Target_2 = 6

def test_3(Data_2,Target_2):                       # in this case, complexity is O(n)T and O(1)S
    i = 0
    temp = 0
    for i in range(len(Data_2)):
        if Data_2[i] == Target_2:
            for j in range(len(Data_2)):
                if i == j:
                    break
                elif Data_2[j] == Target_2:
                    continue
                else:
                    temp = Data_2[i]
                    Data_2[i] = Data_2[j]
                    Data_2[j] = temp
    return Data_2


result_3 = test_3(Data_2, Target_2)
print("from test_3: "+ str(result_3))


print("=========================================================================================================== ")
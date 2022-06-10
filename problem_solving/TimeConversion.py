def timeConversion(s):
    # Write your code here
    x = []
    PMHower = 0
    k = 0
    for i in s:
        x.append(i)
    if 'P' in x:
        x.remove('P')
        x.remove('M')
        current = str(x[0]) + str(x[1])
        if int(current) == 12:
            AMRestlt = str(x[0]) + str(x[1]) + str(x[2]) + str(x[3]) + str(x[4]) + str(x[5]) + str(x[6]+str(x[7]))
            return(AMRestlt)
        else:
            y = str(x[0]) + str(x[1])
        PMHower = int(y) + 12
        k = str(PMHower) + str(x[2]) + str(x[3]) + str(x[4]) + str(x[5]) + str(x[6]) + str(x[7])
        return k
    if 'A' in x:
        x.remove('A')
        x.remove('M')
        current = x[0] + x[1]
        if int(current) == 12:
            print(True)
            m = '00'
            print(x)
            AMRestlt = str(m) + str(x[2]) + str(x[3]) + str(x[4]) + str(x[5]) + str(x[6]+str(x[7]))
            print(AMRestlt)
            return AMRestlt
        else:
            AMRestlt = str(x[0]) + str(x[1]) + str(x[2]) + str(x[3]) + str(x[4]) + str(x[5]) + str(x[6]+str(x[7]))
            return(AMRestlt)

x ='02:40:33AM'
m = '02:33:22PM'
k = '12:45:54PM'
y = timeConversion(k)
print(y)
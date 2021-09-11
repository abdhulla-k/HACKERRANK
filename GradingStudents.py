

def gradingStudents(grades):
    # Write your code here
    return [ i if (i < 38 or i % 5 < 3) else (i + (5 - i%5)) for i in grades]



data1 = [73, 67, 40, 33]
data2 = [33, 38, 40, 22, 98]
print(gradingStudents(data1))
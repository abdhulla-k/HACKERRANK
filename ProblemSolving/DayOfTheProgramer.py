def dayOfProgrammer(year):
    # Write your code here
    M = '.09.'
    def leap(year):
        date = 256 - 243
        return str(date)+M+str(year)
    
    def nonLeap(year):
            date = 256 - 244
            return str(date)+M+str(year)
        
    if year < 1918:
        if year % 4 == 0:
            return nonLeap(year)
        else:
            return leap(year)
        
    elif year > 1918:
        if year % 400 == 0 or year % 4 == 0 and year % 100 != 0:
            return nonLeap(year)
        else:
            return leap(year)
    else:
        return '26.09.1918'

if __name__ == '__main__':
    year1 = 2017
    year2 = 1918
    year3 = 1810
    
    print(dayOfProgrammer(year1))
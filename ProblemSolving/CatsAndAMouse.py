def CatsAndAMouse(a,b,z):
    # location of cat 1
    # location of cat 2
    # loxtion of mouse
    diff = [abs(a-z), abs(b-z)]
    if diff[0] == diff[1]: return 'Mouse'
    else:
        if diff[0] < diff[1]: return 'Cat A'
        else:
            return 'Cat B'

if __name__ == '__main__':
    a = int(input('Enter the location of Cat A'))
    b = int(input('Enter the location of Cat B'))
    z = int(input('Enter the location of Mouse'))
    print(CatsAndAMouse(a,b,z))
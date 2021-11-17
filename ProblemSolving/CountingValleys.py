def countingValleys(steps, path):
    # Write your code here
    result = 0
    status = 0
    counter = False
    for i in path:
        if i == 'U':
            status += 1
        elif i == 'D':
            status += -1
        if status == -1:
            counter = True
        elif status == 1:
            counter = False
        if counter == True and status == 0:
            result += 1
    return result


if __name__ == '__main__':
    steps = 8
    path = 'UDDDUDUU'
    print(countingValleys(steps, path))
    
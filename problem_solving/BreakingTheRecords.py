def breakingRecords(scores):
    # Write your code here
    bCount = 0
    sCount = 0
    biggest = scores[0]
    smallest = scores[0]
    for i in scores:
        if biggest < i:
            bCount += 1
            biggest = i
        if smallest > i:
            sCount += 1
            smallest = i
    return [bCount, sCount]

if __name__ == '__main__':
    print(breakingRecords(scores=[10, 5, 20, 20, 4, 5, 2, 25, 1]))
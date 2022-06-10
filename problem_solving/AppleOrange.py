def countApplesAndOranges(s, t, a, b, apples, oranges):
    # Write your code here
    
    # 1. find apples position
    ApplePosition = []
    for i in apples:
        ApplePosition.append(i + a)
    
    # 2. find orange position
    OrangePosition = []
    for i in oranges:
        OrangePosition.append(i + b)
    
    # 3. apple falled on home
    AppleOnHome = 0
    for i in ApplePosition:
        if s <= i <= t:
            AppleOnHome = AppleOnHome + 1
    
    # 4. orange falled on home
    OrangeOnHome = 0
    for i in OrangePosition:
        if s <= i <= t:
            OrangeOnHome = OrangeOnHome + 1
    # 5. output
    print(AppleOnHome)
    print(OrangeOnHome)

if __name__ == '__main__':
    countApplesAndOranges(s=7, t=11, a=5, b=15, apples=[-2, 2, 1], oranges=[5, -6])
def bonAppetit(bill, k, b):
    # Write your code here
    ChargeActual = (sum(bill)-bill[k])/2
    if b <= ChargeActual:
        print('Bon Appetit')
    else:
        print(int(b - ChargeActual))

if __name__ == '__main__':
    
    bill = [3, 10, 2, 9]
    k = 1
    b = 12
    print(bonAppetit(bill, k, b))
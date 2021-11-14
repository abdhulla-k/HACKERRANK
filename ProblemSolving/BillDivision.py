def bonAppetit(bill, k, b):
    # Write your code here
    ChargeActual = (sum(bill)-bill[k])/2
    if b <= ChargeActual:
        print('Bon Appetit')
    else:
        print(int(b - ChargeActual))

def Second(bill, k, b):
    summ = sum(bill)-bill[k]
    if b*2 <= summ: print('Bon Appetit')
    else: print(int(b-summ/2))

if __name__ == '__main__':
    
    bill = [3, 10, 2, 9]
    k = 1
    b = 12
    bonAppetit(bill, k, b)
    Second(bill, k, b)
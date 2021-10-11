# BoatClean

# 1


def next_move(posr, posc, board):
    i, j = min(((i, j) for i, row in enumerate(board) if 'd' in row for j, c in enumerate(row) if c == 'd'), key=lambda x: abs(posr - x[0]) + abs(posc - x[1]))
    print("LEFT" if j < posc else "RIGHT" if j > posc else "UP" if i < posr else "DOWN" if i > posr else "CLEAN")

'======================================================================'

# 2

def permutations(objects):
    if len(objects) <=1:
        yield objects
    else:
        for perm in permutations(objects[1:]):
            for i in range(len(objects)):
                yield perm[:i] + objects[0:1] + perm[i:]
                
def path_length(path):
    distance = 0
    for i in range(len(path)-1):
        distance += abs(path[i][0] - path[i+1][0]) + abs(path[i][1] - path[i+1][1])
    return distance

def brute_force_tsp(posr, posc, board):
    # get list of dirty cells
    dirty = []
    for i in range(len(board)):
        for j in range(len(board[0])):
            if board[i][j] == "d":
                dirty.append((i,j))
    
    # for all possible orderings of the dirty cells
    min_length = 26
    min_path = None
    for path in permutations(dirty):
        # calculate length of path
        length = path_length([(posr, posc)]+path)
        
        # if less than min, replace min
        if length < min_length:
            min_length = length
            min_path = path
    
    return min_path
    
def next_move(posr, posc, board):
    if board[posr][posc] == "d":
        print ("CLEAN")
        return
        
    min_path = brute_force_tsp(posr, posc, board)
    if posr != min_path[0][0]:
        if posr > min_path[0][0]:
            print ("UP")
        else:
            print ("DOWN")
    else:
        if posc > min_path[0][1]:
            print ("LEFT")
        else:
            print ("RIGHT")

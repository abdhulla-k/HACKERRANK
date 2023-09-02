/*
  There are two ways to represent graph
    1. using multidimensional Arrays
    2. Set or Map or object (It means an hash table.)

                    graph
            ---------------------
                      A
                    /   \
                   B     C
            A has connection to B and C.
            B has connection to A.
            C also has connection to A

      Representation of a graph using matrix
      --------------------------------------
      
                A    B    C 

            A   0    1    1

            B   1    0    0

            C   1    0    0

            1  = have connection
            0  = don't have connection
        

      Representation of a graph using Set
      -----------------------------------

            {
              A: [B, C],
              B: [A],
              C: [A],
            }
          
*/
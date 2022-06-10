# variable in bash

x=3
y="abdhu" # space is not allowed

#=======================================

# if else in bash
if [ $x -lt $y ]
then
echo "$x is less than $y"
fi
else
echo "$x is not less than $y"
fi

# =============================================

#loop

colour1="red"
colour2="white"
colour3="black"
for x in "$colour1" $colour2" $colour3"
do
echo $x
done

#loop

i=0
while [ $i -lt 100 ]
do
x=$(( i % 2 ))
if [ $x -ne 0 ]
then
echo $i
fi
i=$(( i + 1 ))
done
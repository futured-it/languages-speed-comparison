## Fibonacci
Algorithm for calculating Fibonacci numbers from 1 to N.

### Algorithm
There is a function called `fib` that takes one 32-bit integer number `n`. In `fib` function 32-bit integer number variables `a` and `b` are declared with values `0` and `1` respectively. Next, a while loop is created with the condition `a < n`. Inside the loop (each iteration), the value of the variable `a` is displayed without a line break with a separator in the form of a space (` `), then the values of the variables `a` and `b` are swapped, and the variable `b` is equal to the sum of the values of `a` and `b`.

In the `main` function, the second system argument is catched and passed directly to the `fib` function as `n` argument.

[See the Python example →](./python/fibonacci.py)
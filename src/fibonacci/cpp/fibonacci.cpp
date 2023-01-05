#include <iostream>
using namespace std;
  
void fib(long n)
{
    long a = 0, b = 1;
    while (a < n) 
    {
        cout << a << ' ';
        swap(a,b);
        b = a+b;
    }
    cout << endl;
}

int main(int argc, char *argv[])
{
    fib(stol(argv[1]));
    return 0;
}
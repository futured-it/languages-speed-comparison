function fib(n) {
    let a = 0, b = 1;
    while (a < n) {
        process.stdout.write(String(a)+" ");
        [ a, b ] = [ b, a+b ];
    };
    process.stdout.write("\n");
}

fib(Number(process.argv[2]));
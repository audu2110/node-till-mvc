function fib()
{
    let n1=0;
let n2=1;
let temp;
console.log(n1);
console.log(n2);
for(let i=0;i<8;i++)
{
    temp=n1;
    n1=n2;
    n2=temp+n2;
    console.log(n2);
}
}
fib();



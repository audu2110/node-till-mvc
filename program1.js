let n=1000;
let sum=0;
for(let i=1;i<n;i++)
{
    if(i%3==0 || i%5==0)
    {
        sum+=i;
    }
}
console.log(sum);
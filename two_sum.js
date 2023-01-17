let a=[3,1,4,5,9,13,11];
let target=9;
a.sort();
let i=0;
let j=7;
while(i<j){
    if(a[i]+a[j]==target){
        console.log(a[i]);
        console.log(a[j]);
        break;
    }
    else if(a[i]+a[j]>target){
        j--;
    }
    else{
        i++;
    }

}


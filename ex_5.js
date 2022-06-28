let x,y;
for(let i=1;i<=6;i++){
    let num=" "
    if(i%2==0){
        x=1;
        y=0
    }else{
        x=0;
        y=1;
    }
    for (j = 1; j <= i; j++){
        if (j % 2 == 0){
            num=num+x
         }
         
         else{
             // console.log(y);
             num=num+y
         }
    }

console.log(num)
}

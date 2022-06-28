// i=5 => i>=1 condition true, will go to next loop(i will decreament) 
for(i=5;i>=1;i--){
    let stars="   "  
    // space=1 =>1<=5-1=4/2<=5/3<=5/4<=4/5<=5/(6 is not = to 5 so condition will fail) so condition will be true and will print space, will go to next loop 
    for(let space=1;space<=5-i;space++){
        stars=stars+' '
    }
    // j=1 => 1<=2*i(1)-1 =>1<=1 condition will become true, will print star and increament, if next condition will become false  it will come out and go to next line
    for(let j=1;j<=2*i-1;j++){
        stars=stars+'*'
    }
    console.log(stars)
}
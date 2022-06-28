// i=1 => i<=5 condition true, will go to next loop(i will increament) 
for(i=1;i<=5;i++){
    let stars="   "  
    for(let space=1;space<=5-i;space++){
        stars=stars+' '
    }
    for(let j=1;j<=2*i-1;j++){
        stars=stars+'*'
    }
    console.log(stars)
    }

    for(i=5-1;i>=1;i--){
        let stars="   "  
        for(let space=1;space<=5-i;space++){
            stars=stars+' '
        }
        for(let j=1;j<=2*i-1;j++){
            stars=stars+'*'
        }
        console.log(stars)
        }
        
    
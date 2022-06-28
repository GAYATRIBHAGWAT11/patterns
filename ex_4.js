for(let i=1;i<=6;i++){
    let stars=" "
    for(let j=1;j<=6;j++){
        if((i+j)<=6){
            stars=stars+' '
        }else{
            stars=stars+'*'
        }
        
    }
    console.log(stars)
}

const NumberOfBeers = prompt (" how many Beers?")

const stanza = makeStanza(NumberOfBeers);

function makeStanza (num){
    const stanza = `${num} bottles of beer on the wall 
    ${NumberOfBeers} bottles og beer 
    take 1 down , pass it around
    ${NumberOfBeers- 1 } bottels of beer on the wall ` ;
    return
}




// let num = 1 
// let bottles = 99 Number(prompt ("how many bottles of beer?"));
// do{
//     if(bottles - num < 0){

//     }
//     console.log(`${bottles} bottles of beer on the wall` );
//     console.log(`${bottles} bottles of beer` );
    
//     console.log(`take ${bottles} down pass them aroud ` );
//     console.log( `0 bottles of beer on the wall ` );
//     break;   
//     }
//     console.log(`${bottles} bottles of beer on the wall` );
//     console.log(`${bottles} bottles of beer` );
    
//     bottles -= num ;

//     console.log(`take ${num} down pass them aroud ` ) ;
//     console.log(`${bottles} bottles of beer on the wall` ) ;
//     num+=1;
// } while ( bottles > 0);
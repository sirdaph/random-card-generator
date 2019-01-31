window.onload =() =>{
   
 
  let rr =document.querySelectorAll(".suitlogo");
  let suit = genRandSuit();
  for( var i=0; i<rr.length; i++){
      rr[i].innerHTML = suit;
      if(suit=== "&hearts;" || suit=== "&diams;" ){
        rr[i].classList.toggle("red");

      }    
     
  }

    
   
    
    //.innerHTML=genRandSuit();
    document.querySelector('.number').innerHTML=genRandNum();
};
let genRandNum = () =>{
        let numbers =["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        let indexNumbers = Math.floor(Math.random()*numbers.length);
        return numbers[indexNumbers];
}    
let genRandSuit = () =>{    
        let suit = ["&spades;", "&clubs;","&hearts;","&diams;"]
        let indexSuit = Math.floor(Math.random()*suit.length);
        return suit[indexSuit];
}
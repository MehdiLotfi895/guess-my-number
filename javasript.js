let int= Math.floor(Math.random()*20)+1;


document.querySelector('#check').addEventListener('click',function(){
    let intGuess=Number(document.querySelector("#mahdi").value);
    if(intGuess){
        if(intGuess>int){
            document.querySelector("#message").textContent='to big.....';
            document.querySelector("#s").textContent=String(Number(document.querySelector("#s").textContent)-1)
        }
        if(intGuess<int){
            document.querySelector("#message").textContent='to low.....';
            document.querySelector("#s").textContent=String(Number(document.querySelector("#s").textContent)-1)
        }
        if(intGuess==int){
            document.querySelector("#message").textContent='correct!';
            document.querySelector("#q").textContent=intGuess;
            document.querySelector('body').style.backgroundColor='green';
            if(Number(document.querySelector("#h").textContent)<Number(document.querySelector("#s").textContent)){
                document.querySelector("#h").textContent=document.querySelector("#s").textContent;
                
            }

        }

}
    else{
    document.querySelector("#message").textContent='you didnt enter a number';
   }


})
 document.querySelector('#restart').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='black';
    int= Math.floor(Math.random()*20)+1;
    document.querySelector("#s").textContent=String(20);
    document.querySelector('#message').textContent='enter a number:';
    document.querySelector('#mahdi').value="NaN";
    document.querySelector("#q").textContent="?";

 })



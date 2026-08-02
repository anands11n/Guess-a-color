let true_=document.querySelector(".true");

function begin(){
    true_.innerText="Click any box to to guess a color";
    let randColor=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    let realIdx=Math.floor(Math.random()*6);
    let arrOfBoxes=document.querySelectorAll(".card");
    arrOfBoxes[realIdx].style.backgroundColor=`${randColor}`;
    for(let i=0; i<6; i++){
        if(i!=realIdx){
            arrOfBoxes[i].style.backgroundColor=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        }
    }

    for(let i=0; i<6; i++){
        arrOfBoxes[i].addEventListener("click", ()=>{
            if(arrOfBoxes[i].style.backgroundColor===`${randColor}`){
                true_.innerText="Right Guess!";
                true_.style.backgroundColor=`${randColor}`;

            } else{
                true_.innerText="Wrong Guess!";
                true_.style.backgroundColor=`rgb(${255}, ${0}, ${0})`;
            }

        })
    }

}


document.addEventListener("keypress", ()=>{
    begin();
});


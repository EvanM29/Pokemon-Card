window.onload = function(){
    var pokemonPack = document.getElementById("pokemon-pack");
    pokemonPack.addEventListener("click" , openPack);
}

//this generated a random number which we use to pick out the card number in the openPack function
function randomNoGenerator(min,max){
    return Math.ceil(Math.random() * (max-min) +min);
}



function openPack(){
    //alert("you have opened your pack");

    let cardsOpened = document.getElementById("pokemon-cards-opened");
    while (cardsOpened.firstChild){
        cardsOpened.firstChild.remove();
    }

    //to generate the cards we use this loop
    for(let i = 0; i<11; i++){
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        let cardImg = document.createElement("img"); //create an img
        cardImg.id = i; //id starts at 0 and will increment as needed 

        let number = 1;
        if (i==10){
            number = randomNoGenerator(1,16); //rare cards for last card
        }
        else{
            number = randomNoGenerator(17, 102); //other cards
        }

        cardImg.src = "./pokemon-cards/base set (" + number.toString() + ").jpg";

        cardDiv.appendChild(cardImg); //the img is put inside the div
        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
    }
}
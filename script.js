window.onload = function(){
    var pokemonPack = document.getElementById("pokemon-pack");
    pokemonPack.addEventListener("click" , openPack);
}

function openPack(){
    alert("you have opened your pack");
}
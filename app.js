let ajouter = document.getElementById('ajouter');
let carre = document.getElementById('carre');
let taux = document.getElementById('taux');
let appointir = document.getElementById('appointir');
let compteur = 0;

listeners();

function listeners(){
    ajouter.addEventListener("click", function (){
        addBorderRadius();
        showBorderRadius();
    })
    appointir.addEventListener("click", function (){
        removeBorderRadius();
        showBorderRadius();
    })
}

function addBorderRadius(){
    if(compteur < 50){
        compteur++;
    }
    carre.style.borderRadius = compteur+"%";
}

function removeBorderRadius(){
    if(compteur > 0){
        compteur--;
    }
    carre.style.borderRadius = compteur+"%";
}

function showBorderRadius(){
    taux.innerHTML = carre.style.borderRadius;
}
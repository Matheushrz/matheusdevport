let menuVisible = false;
//Função que esconde ou mostra o menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Escondo o menu assim que seleciono uma opção
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Função que aplica as animações das habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("comunicação");
        habilidades[5].classList.add("trabalho");
        habilidades[6].classList.add("creatividade");
        habilidades[7].classList.add("dedicação");
    }
}


//animação da barra de habilidade
window.onscroll = function(){
    efectoHabilidades();
} 

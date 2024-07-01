var pontosvalor = document.getElementById("pontosValor")
var erros = 0

var pontos = 100



function errado(){
erros++;
pontos -= 10

pontosvalor.textContent = pontos;

if(erros == 2){
   
var dica = document.querySelector('.dica')
var help = document.querySelector('.help')

dica.classList.add("on")
help.classList.add("on")
}
}

function troca1(){

var butão1 = document.getElementById("but1")

butão1.classList.add("troca")
}

    
function troca3(){

    var butão3 = document.getElementById("but3")
    
    butão3.classList.add("troca")
    
    
    
}
function troca4(){

    var butão4 = document.getElementById("but4")
    
    butão4.classList.add("troca")
    
    
    
}

function certo(){
    pontos += 50

    pontosvalor.textContent = pontos;

  var next = document.querySelector('.proximo')

  next.classList.add("ver")
}














document.addEventListener("DOMContentLoaded",function(){

var butu = document.getElementById("but1")
var disco = document.getElementById("img1")


butu.addEventListener("mouseover", function() {

disco.classList.add("show")

});


butu.addEventListener("mouseout", function() {
    disco.classList.remove("show");
});
});

document.addEventListener("DOMContentLoaded",function(){

    var butu2 = document.getElementById("but2")
    var placa = document.getElementById("img2")
    
    
    butu2.addEventListener("mouseover", function() {
    
    placa.classList.add("show")
    
    });
    
    
    butu2.addEventListener("mouseout", function() {
        placa.classList.remove("show");
    });
    });
    
document.addEventListener("DOMContentLoaded",function(){

        var butu3 = document.getElementById("but3")
        var memoria = document.getElementById("img3")
        
        
        butu3.addEventListener("mouseover", function() {
        
        memoria.classList.add("show")
        
        });
        
        
        butu3.addEventListener("mouseout", function() {
            memoria.classList.remove("show");
        });
        });
        
        document.addEventListener("DOMContentLoaded",function(){

            var butu4 = document.getElementById("but4")
            var processador = document.getElementById("img4")
            
            
            butu4.addEventListener("mouseover", function() {
            
           processador.classList.add("show")
            
            });
            
            
            butu4.addEventListener("mouseout", function() {
            processador.classList.remove("show");
            });
            });
            
              
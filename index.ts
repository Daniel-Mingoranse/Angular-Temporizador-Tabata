// Import stylesheets
import './style.css';

let exercicio: number = 0;
let tempo: number = 0;
let ciclo = 8;
let relogio = 0
let cronometro = document.getElementById("cronometro");
let ciclos =  document.getElementById("ciclo")

function cronometro_exercicio(){

  ciclos.innerHTML = `ciclo ${ciclo}`

  relogio = setInterval(() =>{
    cronometro.innerHTML = `Treine ${tempo}`
    tempo++

    if(tempo > 19){
      cronometro.innerHTML = `Descanse ${tempo}`
      ciclos.innerHTML = `ciclo ${ciclo}`
      
        if(tempo == 30){
            tempo = 0;
            cronometro.innerHTML = `Timer ${tempo}`
            ciclo = ciclo -1
            ciclos.innerHTML = `ciclo ${ciclo}`
            if(ciclo = 0){
              alert("Treino concluido");
            }
          }
    }
  }, 1000)

  
    
  
}



document.getElementById('start').addEventListener('click', (() =>{
  cronometro_exercicio()
}))

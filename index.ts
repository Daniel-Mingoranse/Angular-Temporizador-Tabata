// Import stylesheets
import './style.css';

let pausa: number = 0;
let tempo: number = 1;
let ciclo = 1;
let relogio = 0
let time = -1;
let cronometro = document.getElementById("cronometro");
let ciclos =  document.getElementById("ciclo")
let body = document.getElementById('tabata');
let botao = document.getElementById('start')
function cronometro_exercicio(){

  
  ciclos.innerHTML = `Ciclo 0${ciclo}`

  // cuida do cronometro
  relogio = setInterval(() =>{
    cronometro.innerHTML = `Treine ${tempo}`
    body.style.backgroundColor = 'red';
    body.style.color = 'white';
    tempo++ 

    if(tempo >= 21){
      body.style.backgroundColor = 'green';
      cronometro.innerHTML = `Descanse ${tempo-1}`
    }
    if(tempo == 30){
      tempo = 0;
    }
  }, 1000)




  // cuida somente dos ciclos
  pausa = setInterval(() =>{    
      time++;
      ciclo = ciclo - 1;
      ciclos.innerHTML = `Ciclo 0${ciclo}`;  
      console.log(ciclo)

      if(ciclo < 1){
        window.location.reload();
      }

  },30000)
    
  
}



botao.addEventListener('click', (() =>{
  cronometro_exercicio();
  (document.getElementById('start') as HTMLInputElement).disabled = true;
}))

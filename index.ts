// Import stylesheets
import './style.css';

let pausa: number = 0;
let tempo: number = 1;
let ciclo = 8;
let relogio = 0
let time = 0;
let cronometro = document.getElementById("cronometro");
let ciclos =  document.getElementById("ciclo")
let app = document.getElementById('app');
let botao = document.getElementById('start')
function cronometro_exercicio(){

  
  ciclos.innerHTML = `Ciclo 0${ciclo}`

  // cuida do cronometro
  relogio = setInterval(() =>{
    cronometro.innerHTML = `Treine ${tempo}`
    app.style.backgroundColor = 'rgb(0, 90, 194)';
    app.style.color = 'white';
    botao.style.backgroundColor = 'white'
    botao.style.color = 'black'
    botao.innerHTML = 'Aguarde...'
    tempo++ 

    if(tempo >= 21){
      app.style.backgroundColor = 'green';
      cronometro.innerHTML = `Descanse ${tempo}`
    }
    if(tempo == 31){
      tempo = 1;
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
  alert('Aperte no "Ok" para iniciar seu treino!');
  (document.getElementById('start') as HTMLInputElement).disabled = true;
}))

//Meu objetivo é unir esse código inteiro com a API e através dessa API mostrar as músicas.//

const iniciar = async() => {
    console.log('antes de fetch');
  
    const response = await fetch('https://musicbrainz.org/ws/2/artist?fmt=json&query=u2');
    //const response = await fetch('/index.json');
    console.log(response);
    const atumalaca = await response.json();
    console.log(atumalaca);
    console.log('depois de fetch');
  };
  









  document.addEventListener('DOMContentLoaded', iniciar);


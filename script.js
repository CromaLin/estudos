const lutador = 'Donald "Cowboy" Cerrone';
const nacionalidade = 'Denver, Estados Unidos';
const idade = 41;
const peso = 68;
const altura = 1.83;

document.getElementById('info_lutador').innerHTML = `<b>Lutador: </b> ${lutador}`;
document.getElementById('info_nacionalidade').innerHTML = `<b>Nacionalidade: </b> ${nacionalidade}`;
document.getElementById('info_idade').innerHTML = `<b>Idade de aposentadoria: </b> ${idade} anos`;
document.getElementById('info_peso').innerHTML = `<b>Peso: </b> ${peso} kg`;
document.getElementById('info_altura').innerHTML = `<b>Altura: </b> ${altura} m`;

////////////////////////////////////////////////
function formatData(){
  const hoje = new Date();
  const dia = hoje.getDate().toString().padStart(2, '0'); // o padStart() é usado para preencher conteudos à esquerda até atingir um tamanho determinado, o primeiro valor é o tamanho e o segundo o preenchimento;
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // tem que somar o getMonth() porque ele puxa uma array, logo começa no 0;
  const ano = hoje.getFullYear();
  return `${dia}/${mes}/${ano}`;
}
let frase = 'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.';
let autor = 'Martin Luther King';

document.getElementById('frase_data').innerHTML = formatData();
document.getElementById('frase_mensagem').innerHTML = frase;
document.getElementById('frase_autor').innerHTML = `<u><i>${autor}</i></u>`;

//////////////////////////////////////////////////////////
function getMeses(){
  const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  let num1 = Math.floor(Math.random() * 12);
  let num2 = Math.floor(Math.random() * 12);
  let num3 = Math.floor(Math.random() * 12);
  while (num1 == num2){
     num2 = Math.floor(Math.random() * 12);
  };
  while (num3 == num1 || num3 == num2 ){
    num3 = Math.floor(Math.random() * 12);
  };
  return `${mes[num1]}, ${mes[num2]}, ${mes[num3]}`;
}

document.getElementById('meses').innerHTML = getMeses();

////////////////////////////////////////////////////////////
const jogo = {
  nome: 'Valorant',
  criador: 'Riot Games',
  ano: 2020
}

document.getElementById('jogo_nome').innerHTML = jogo.nome;
document.getElementById('jogo_criador').innerHTML = jogo.criador;
document.getElementById('jogo_lancamento').innerHTML = jogo.ano;
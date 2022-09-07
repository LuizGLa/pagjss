function alimentosGramas(){
    var nome = document.getElementById("nome").value;
    var quan = document.getElementById("quan").value;
    var usad = document.getElementById("dias").value;
    var inte = document.getElementById("inte").value;
    var quantQui = quan;
    var quantSen = quantQui * usad;
    var quantMen = quantSen * 4;
    var quantCad = quan / inte;


    var caixa = document.getElementById("resposta");

    caixa.innerHTML = `<p>Nome do produto: ${nome}`;
    caixa.innerHTML += `<p>Quantidade por dia: ${quan} g`;
    caixa.innerHTML += `<p>Dias da semana: ${usad}`;
    caixa.innerHTML += `<p>Quantidade de integrantes:${inte}`;
    caixa.innerHTML += `<p>A quantidade semanal consumida: ${quantSen} kg`;
    caixa.innerHTML += `<p>A quantidade mensal consumida: ${quantMen} kg`;
    caixa.innerHTML += `<p>Quantidade usada por cada integrante semanalmente: ${quantSen} g e mensalmente: ${quantMen}`;

}
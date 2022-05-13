function verificarIdade(){
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0){
        alert('Idade é obrigatoria')
        return
    }
    
    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18){
        alert('OK, vcp pode tirar a CNH')
    } else if(idadeNum > 4){
        alert('vc é menor idade, melhor andar de bike')
    } else {
        alert('melhor voce tomar leite...')
    }

    // console.log(nome.value);
    // console.log(typeof nome);
    // console.log(idadeNum.value);
    // console.log(typeof idadeNum);
}

// var nome = prompt("qual é o seu nome?");
// var idade = prompt("informa a sua idade");
// console.log(nome);
// console.log(typeof nome);
// console.log(idade);
// console.log(typeof idade);
// document.getElementById("nome").innerText = nome;
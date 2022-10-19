var arrayAluno = new Array();
var  aluno
var nota1 = 0, nota2 = 0, cont = 1

for(var i = 0; i < 2; i++){

    aluno = prompt("Digite o nome do "+cont+" aluno.")
    if(aluno == "" || aluno == null){ 
        alert("Campo nome do aluno, não pode ser vazio!!")
        aluno = prompt("Digite o nome do "+cont+" aluno.")
        if(aluno == "" || aluno == null){ 
            alert("Processo finalizado!")
            break; 
            }else{
                arrayAluno.push(aluno)
            }
    }else{
        arrayAluno.push(aluno)
    }
    cont++;
}

arrayAluno.forEach(element => {

    mediaAluno = promptInt(element)
    console.log("A nota final do aluno(a) " + element + " é de : " + mediaAluno)
    if(mediaAluno >= 70){
        console.log("Parabéns " + element + ", você foi Aprovado!")
    }else{
        console.log("Infelizmente " + element + ", você foi Reprovado!")
    }
    console.log("-----------------------------------------------------")
});

function promptInt(element) {
    while (true) {
            nota1 = parseInt(prompt("Digite a primeira nota do Aluno "+ element));
        if (!isNaN(nota1)){
            nota2 = parseInt(prompt("Digite a Segunda nota do Aluno "+ element));
            if (!isNaN(nota2)) return media(nota1, nota2);
        }
    }
}

function media(n1, n2){
    return  (n1 + n2)/2;
}

const calcular = document.getElementById('calcular')

function media(){
    const nome = document.getElementById('nome').value
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const resultado = document.getElementById('resultado')

    if(nome !== '' && nota1 !== '' && nota2 !== ''){
        const media = ((nota1 + nota2) / 2)

        let res = '';

        if(media >= 5 && media < 10){
            res = 'Aprovado! ';
        }
        else if(media >= 10){
            res = 'Aprovado, Parabéns nota máxima!!! '
        }
        else if( media < 5){
            res = 'Reprovado! '
        }
        resultado.textContent = `Nota: ${media}, ${nome} você foi ${res}`
        
    }else{
            resultado.textContent = 'Preencha todos os campos!!!'
        }
    

}

calcular.addEventListener('click',media);
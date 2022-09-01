function esperar(){

    var operacao = document.querySelectorAll("#botao button")
    var igual = document.querySelector("#igual button")
    var apagar = document.querySelector("#apagar")
    var btnnum=document.querySelectorAll(".btnnum")
    let valor=document.querySelector(".valor")
   
    let opescolhida=""  //operaçao escolhida (+,-,etc)
    let escolhidos1=""    //numeros escolhidos primeiro
    let escolhidos2="" // numeros escolhidos apos operação
    let resultado=0 // resultado das operações

// adicionando eventos aos botoes
    //** concatenando numeros
    btnnum.forEach(e=>{
        e.addEventListener("click",numerosclicados)
    })
    //criterio de resultado
    operacao.forEach(e=>{
        e.addEventListener("click",operacaoescolhidaf)
    })

    //== evento ao igual
    igual.addEventListener("click",igualdade)
    //apagar tudo
    apagar.addEventListener("click",c)

//FUNÇÕES 

    //função para controlar o tamanho da string e também concatenar os numeros
    function numerosclicados(event){
        escolhidos1+=event.target.value
        valor.innerHTML=escolhidos1
        if(escolhidos1.length==22){
            valor.innerHTML=
            escolhidos1=escolhidos1.substring(0,escolhidos1.length-1)
            console.log("tamanho dentro do if:"+escolhidos1.length)
        }
        console.log(escolhidos1)
    }

    // segundo numeros escolhidos para operação
    function numerosclicados2(event){
        escolhidos2+=event.target.value
        console.log("escolhidos1: "+escolhidos1)
        console.log("escolhidos2 :"+escolhidos2)
        valor.innerHTML+=event.target.value
        if(escolhidos2.length==22){
            valor.innerHTML=
            escolhidos2=escolhidos2.substring(0,escolhidos2.length-1)
        }
    }
    //funcçao de apagar
    function c (){
        escolhidos1=""
        escolhidos2=""
        resultado=""
        valor.innerHTML=""
        btnnum.forEach(e=>{
            e.addEventListener("click",numerosclicados)
        })
        
        btnnum.forEach(e=>{
            e.removeEventListener("click",numerosclicados2)
        })
    }

    //FUNÇÕES DE CRITERIO PRA USAR NO IGUALDADE
    function operacaoescolhidaf(e){
        btnnum.forEach(e=>{
            e.removeEventListener("click",numerosclicados)
        })
        
        btnnum.forEach(e=>{
            e.addEventListener("click",numerosclicados2)
        })
        opescolhida=e.target.innerHTML
        if(opescolhida==="+")
            valor.innerHTML=escolhidos1+ "+"
        else if(opescolhida==="-")
            valor.innerHTML=escolhidos1+ "-"
        else if(opescolhida==="÷")
            valor.innerHTML=escolhidos1+ "÷"
        else if(opescolhida==="x")
            valor.innerHTML=escolhidos1+ "x"
         
        
    }

    // resultado
    function igualdade(){
        escolhidos1=Number(escolhidos1)
        escolhidos2=Number(escolhidos2)
        if(opescolhida=== "+"){
            resultado=escolhidos1+escolhidos2
            valor.innerHTML=resultado
        }
        else if(opescolhida==="-"){
            resultado=escolhidos1-escolhidos2
            valor.innerHTML=resultado
        }
        else if(opescolhida==="x"){
            resultado=escolhidos1*escolhidos2
            valor.innerHTML=resultado
        }
        else if(opescolhida==="÷"){
            resultado=escolhidos1/escolhidos2
            valor.innerHTML=resultado
        }
        //caso queira continuar somando ex 5+1=6 ai 6+2=8
        escolhidos1=resultado
        escolhidos2=0

    }




}

// 1 declarar variaveis com let e const


function teste(){
    for (var i=0;i<5 i++){
          //fazer algo
    }
    console.log("i"+i);
    console.log("j"+j);
}
teste();

//2 usar atribuição via desestruturação
let primos[2,3,5,7,11,13];
 let curso={
     nome: "bootcamp front end";
     presencial:false,
     turma:1
 };
 let[p1,p1......resto]=primos;


 let {nome,turma.....outrosCampos } =curso;


 function imprime({nome}){
     console.log(nome);

 }

 //3 spread operator 
 let primos[2,3,5,7,11,13];
 let curso={
     nome: "bootcamp front end";
     presencial:false,
     turma:1
 };
 let primo2=[....primos,17];
 let primo2=[1,....primos,17];

 let curso2={
     ...curso,
     descricao:"BLA BLA BLA "
     ativo:true
 }
 let curso3 ={
     ...curso
 }

//4 templates literals
let a=2,b=3;
let soma=a+b;
console.log(a+"+"+b+"="+soma);


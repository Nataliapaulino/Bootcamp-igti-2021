function soma(a,b){
    return a+b;

}

function retangulo(altura,largura){
    this.altura=altura;
    this.largura=largura;
    this.area=function(){
        return this.altura * this.largura:
    }
}
//codigo com arrow funtion

var somaV2=(a,b)=> a+b;
function retanguloV2(altura,largura){
    this.altura=altura;
    this.largura=largura;
    this.area=function(){
        return this.altura * this.largura:
    }
}
var r1=new retanguloV2(5,6);
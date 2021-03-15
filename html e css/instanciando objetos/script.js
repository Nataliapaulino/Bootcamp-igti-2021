function Retangulo(altura,largura){
    this.altura = altura;
    this.largura = largura;
    this.area=calculaArea;
}
function calculaArea(){
    return this.altura * this largura;
}
//Prototype chain
function Rentagulo(altura,largura){

    this.altura=altura;
    this.largura=largura;
    this.area=function(){
        return this.altura* this.largura;
    }
}
var r1 =new Retangulo(3,4);
var r2=new Rentagulo(7,2);

function Retangulo2(altura,largura){
    this.altura = altura;
    this.largura = largura;
}
Retangulo2.prototype.area=function(){
    return this.altura * this.largura;
}
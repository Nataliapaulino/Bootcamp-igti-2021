class retangulo{
    constructor(altura,largura){
        this.altura=altura;
        this.largura= largura;
    }
    area(){
        return this.altura* this.largura;
    }
}

class quadrado extends rentangulo{
    constructor(dimensao){
        super(dimensao,dimensao);
    }
 imprimeNome(
    console.log("quadrado");
 )
}

var r1=new rentangulo(3,4);
var r2=new retangulo (3,8);
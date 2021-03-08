console.log('cópia por valor vcs.referencia');
var primitivo1=1;
var primitivo2=primitivo1; //copia valor
primitivo2=2;


console.log(primitivo1); //imprime  1
console.log(primitivo2);//imprime2

var objeto1={x:1};
var objeto2=objeto1; //copia a referencia
objeto2.x=2;

console.log(objeto1.x);//imprime2
console.log(objeto.x);//imprime2 

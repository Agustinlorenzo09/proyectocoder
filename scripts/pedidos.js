// creando los arrays para buscar los datos

const colores = [`rojo`,`verde`,`azul`,`amarillo`,`violeta`,`naranja`,`rosa`,`celeste`,`negro`,`gris`,`marron`,`turquesa`];
const telas = [`flow`,`niza`,`sann`,`venecia`,`talampaya`,`angus`,`zoom`,`gales`,`fidel`];
let carrito = [];
let facturaFinal = [];

// creando variables para acomodar los datos pedidos al usuario y poder comparar con los arrays buscando igualdad

let elegirColor = "";
let elegirTela = "";
let elegirMetro = "";
let cliente = "";
let comenzar = "";
let algoMas = "";
let valor = 0;
let factura = 0;
let precio = 0;

function Pedidos(tela,color,metro,precio) {
    this.tela = tela;
    this.color = color;
    this.metro = metro
    this.precio = precio
    this.valor = valor
}

cliente = prompt(`como es tu nombre?`);
comenzar = prompt(`buenas ` + cliente + ` desea hacer una compra? responder si o no`);
if(comenzar.toLowerCase().trim() == `si`){
        for(let i = 0; i < 10; i++){

         // creando el bucle para tomar el dato de tipo de tela
        
            for (let i = 0; i < 10 ; i++) {

            elegirTela = prompt(`elige una tela`);
            elegirTela = elegirTela.toLowerCase();

            function buscar(tela) {
                return elegirTela == tela;
            }
        
            elegirTela = telas.find(buscar);
            switch (elegirTela) {
                case `flow`: 
                valor = valor + 1000 
                break;
                case `niza`: 
                valor = valor + 2000  
                break;
                case `sann`: 
                valor = valor + 3000  
                break;
                case `venecia`: 
                valor = valor + 4000  
                break;
                case `talampaya`: 
                valor = valor + 5000  
                break;
                case `angus`:  
                valor = valor + 6000 
                break;
                case `zoom`:  
                valor = valor + 7000 
                break;
                case `gales`:  
                valor = valor + 8000 
                break;
                case `gales`:  
                valor = valor + 9000 
                break
                default:
                    break;
            }
        
            if (elegirTela == undefined){
                alert(`escriba bien la tela o la tela que pide no esta disponible`);
            }
            else{
                break
            }
        }
        
        // creando el bucle para tomar el dato del color que quiera el cliente
        
        
        for (let i = 0; i < 10 ; i++){
            elegirColor = prompt(`elige el color de la tela`);
            elegirColor = elegirColor.toLowerCase();
        
            function buscar (color){
                return elegirColor == color;
            }
        
            elegirColor = colores.find(buscar);
        
            if (elegirColor == undefined){
                alert(`escriba bien el color o el color que pide no esta en el muestrario`);
            }
            else{
                break
            }
        
        }
        
        // creando un bucle para pedi el metro
        
        for (let i = 0; i < 10; i++) {
            elegirMetro = parseFloat(prompt(`cuantos metros querias?`));
            
            if (elegirMetro == NaN || elegirMetro == 0){
                alert(`escriba bien la medida`)
            }
           
            else{
                break
            }
            
        }
        
        // creando el objeto
        
        precio = (precio + valor);
        valor = (elegirMetro * valor);
        pedido1 = new Pedidos(elegirTela,elegirColor,elegirMetro,precio,valor);
        carrito.push(pedido1)
        facturaFinal.push(valor);
        valor = 0
        precio= 0

    comenzar = prompt(`algo mas querias ` + cliente + ` ?`)
      if(comenzar.toLowerCase().trim() == `si`){
        continue
      }
      else{
          
          break        
      }
      
    }
 }

 function sumarfacturas(valor) {
    factura = factura + valor
    valor = 0
    
 }
    document.write(`factura: <br>`)
    document.write(`cantidad-tela-color-valormetro-valorfinal <br>`)
for (let i = 0; i < carrito.length ; i++){
    document.write(` ` + carrito[i].metro + `m - ` + carrito[i].tela + ` - ` + carrito[i].color + ` - ` + carrito[i].precio + ` c/m  - ` + carrito[i].valor + ` `  +`<br>`);
    factura = (factura + facturaFinal[i]);
}

document.write(`<br><br><br><br>factura final: ` + factura)












































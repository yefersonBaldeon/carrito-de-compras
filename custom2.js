

let contenedor=document.querySelector(".products");
let agregar=document.querySelector(".card-items");
let ventana_toal=document.querySelector(".price-total")


let producto=document.querySelector(".count-product")




var lista_productos=[];

var pagar=0;

var c=0;


cargando_evento();

function cargando_evento(){

    contenedor.addEventListener("click",addproduct)
    agregar.addEventListener("click",deleteproduct)
    
}


function deleteproduct(e){
    
    
    if(e.target.classList.contains("delete-product")){


        let producto=e.target.getAttribute("data-id");


        lista_productos.forEach(value=>{

         if(value.id==producto){

                let reducir=parseFloat(value.precio)*parseFloat(value.cantidad) 
                pagar=pagar-reducir;
                pagar=pagar.toFixed(2)
         }   

        })



        
        lista_productos=lista_productos.filter(one=>one.id!=producto)

        console.log(lista_productos)

            }

            
         c--;   

        if(lista_productos.length==0){

        ventana_toal.innerHTML=0;

        producto.innerHTML=0;

            
        }



        load_html();    
}



function addproduct(e){

    e.preventDefault();

if(e.target.classList.contains("btn-add-cart")){
    var producto_select=e.target.parentElement;
    // console.log(producto_select);
    probando(producto_select)

   // console.log(producto_select.id)
    
}}

function probando(one){

    let a={
     
   imagen: one.querySelector("img").src,
   titulo: one.querySelector(".title").innerHTML,
   precio: one.querySelector("span").innerHTML,
   id:one.querySelector("a").getAttribute("data-id"),
   cantidad:1     

        }

    pagar=parseFloat(pagar)+parseFloat(a.precio)
    pagar=pagar.toFixed(2)


    let existe=lista_productos.some(two=>two.id==a.id)
    
    if(existe){

        var second=lista_productos.map(three=>{

            if(three.id==a.id){
                three.cantidad++;
                return three;
            }

             else
                return three;    

        })

        lista_productos=[...second] 
        
    }

    else{

        c++;
        lista_productos=[...lista_productos,a] 
        
    }

    load_html();

}


function load_html(){

    agregar.innerHTML="",

    lista_productos.forEach(element => {

        const {imagen,titulo,precio,id,cantidad}=element;

        let row=document.createElement("div");

        row.classList.add('item');

        row.innerHTML=
        `
        <img src="${imagen}" alt="">
        <div class="item-content">
            <h5>${titulo}</h5>
            <h5 class="cart-price">${precio}$</h5>
            <h6>Cantidad: ${cantidad}</h6>
        </div>
        <span class="delete-product" data-id="${id}">X</span>

        `

        agregar.appendChild(row);

        ventana_toal.innerHTML=pagar;

        producto.innerHTML=c;
    });



}








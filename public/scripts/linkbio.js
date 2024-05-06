const cajaJervicios = document.getElementById("seleccion-navar-izq");
const cajaInfo = document.getElementById("seleccion-navar-der");
const contenedorDelContenido = document.getElementById("contenedor-contenido");
const servicios = document.getElementById("servicios");
const informacion = document.getElementById("informacion");

const contenidoInfo = `<div class="contenedor-elementos-info">

<a href="https://tinyurl.com/RivasDiscord" class="elemento-info link-url">
  <p class="nombre-link">Discord</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="https://tinyurl.com/Documentos-ticoDev" class="elemento-info link-url">
  <p class="nombre-link">Documetos</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="#" class="elemento-info link-url">
  <p class="nombre-link">Telegram</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<div class="elemento-info ">
  <p class="nombre-link">Portafolio</p>
  <a href="https://tinyurl.com/Rivasportfolio" class="link-url">
    <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
  </a>
</div>

</div>`;
const contenidoServicios = `<a href="#" onclick="mostrarServicioCanva()" class="contenedor-elementos-servicio" id="servicio-canva">
<div class="contenido-servicio-canva">
  <div class="contenedor-img">
  <img class="img-servicio" src="public/img/elementos-canva/Logo-canva-pro-sin-fondo.webp" alt="">
  </div>
  <div class="contenedor-textos-servicio">
    <H1 class="titulo-producto">Canva pro</H1>
    <h2 class="descripcion-servicio">Disfruta del contenido premium de canva al mejor precio</h2>
  </div>
  </div>
</a>`;

contenedorDelContenido.innerHTML = contenidoInfo;

cajaInfo.classList.toggle("navar-selecion");

valorClick = 0;
cajaJervicios.addEventListener("click", function eventos(event) {

  if (valorClick == 0) {
    cajaJervicios.classList.toggle("navar-selecion");
    cajaInfo.classList.toggle("navar-selecion");
    servicios.classList.toggle("navar-text-color");
    informacion.classList.toggle("navar-text-color");
    contenedorDelContenido.innerHTML = contenidoServicios;
    valorClick = 1;
  }

});

cajaInfo.addEventListener("click", function eventos(event) {
  if (valorClick == 1) {
    cajaInfo.classList.toggle("navar-selecion");
    cajaJervicios.classList.toggle("navar-selecion");
    servicios.classList.toggle("navar-text-color");
    informacion.classList.toggle("navar-text-color");
    contenedorDelContenido.innerHTML = contenidoInfo;
    valorClick = 0;
  }
});


 const mostrarServicioCanva = () => {
   const planesCanva = `<section class="caja-servicio">

       <div class="caja-btn-prueba">
          <a href="https://tinyurl.com/solicitarCanvaPro" class="btn-solicitar-prueba">Pide tu Canva pro <span class="btn-palabra-gratis">GRATIS!!</span></a>
       </div>
      
       <div class="contenedor-servicio-plata">
      
         <div class="caja-descuento">
           <img src="public/img/elementos-canva/imd-descuento.webp" alt="" class="img-descuento">
           <h2 class="nombre-plan">PLAN PLATA</h2>
         </div>
      
         <div class="caja-logo-servicio">
           <img src="public/img/elementos-canva/Logo-canva-pro-sin-fondo.webp" alt="" class="logo-servicio">
         </div>
      
         <div class="caja-descripcion-servicio">
           <h1 class="descripcion-del-servicio">+6 MESES CANVA PRO</h1>
         </div>
      
         <div class="caja-precios">
           <p class="precio-servicio"><span class="simbolo-dolar">$</span>6,45</p>
           <p class="precio-descuento"><span>$</span>12,90</p>
         </div>
      
         <div class="caja-btn-pedir">
           <a href="https://tinyurl.com/planplata" class="btn-pedir-servicio-plata">Pedir</a>
         </div>
      
       </div>
      
       <div class="contenedor-servicio-oro">
      
         <div class="caja-descuento">
           <img src="public/img/elementos-canva/imd-descuento.webp" alt="" class="img-descuento">
           <h2 class="nombre-plan">PLAN ORO</h2>
         </div>
      
         <div class="caja-logo-servicio">
           <img src="public/img/elementos-canva/Logo-canva-pro-sin-fondo.webp" alt="" class="logo-servicio">
         </div>
      
         <div class="caja-descripcion-servicio">
           <h1 class="descripcion-del-servicio">+12 MESES CANVA PRO</h1>
         </div>
      
         <div class="caja-precios">
           <p class="precio-servicio"><span class="simbolo-dolar">$</span>10,45</p>
           <p class="precio-descuento"><span>$</span>20,90</p>
         </div>
      
         <div class="caja-btn-pedir">
           <a href="https://tinyurl.com/canvaplanoro" class="btn-pedir-servicio-oro">Pedir</a>
         </div>
      
       </div>
      
       </section>`;

   contenedorDelContenido.innerHTML = planesCanva;
 }

 // ↓↓ al estar mostrando un servicio y darle click
//   a la pestana servicios, debe volverte a cargar los servicios (NO FUNCIONA AUN) ↓↓

 const recargarServicios = () => {
   if (valorClick == 1) {
    contenedorDelContenido.innerHTML = contenidoServicios;
   }
 };

 cajaJervicios.addEventListener("click", recargarServicios);

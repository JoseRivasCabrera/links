// import { listaPracticas } from "./practicas.js";

const cajaJervicios = document.getElementById("seleccion-navar-izq");
const cajaInfo = document.getElementById("seleccion-navar-der");
const contenedorDelContenido = document.getElementById("contenedor-contenido");
const servicios = document.getElementById("servicios");
const informacion = document.getElementById("informacion");

const practicasReales = document.getElementById("practicasReales");

window.listaPracticas = () => {
  const practicas = `<section class="caja-proyecto-practica">

  <div class="proyecto-practica">
  
    <h2 class="nombre-practica">Creación de una página de perfil personal</h2>
  
  <div class="caja-contenido-practica">
      <div class="caja-tecnologias-practica">
          <h2 class="titulo-tecnologias">Tecnologías</h2>
          <img src="public/img/iconos/vscode-icons--file-type-html.svg" alt="HTML Icon" class="icono-practica">
          <img src="public/img/iconos/vscode-icons--file-type-css.svg" alt="CSS Icon" class="icono-practica">
      </div>
  
      <div class="dificultad">
          <h3 class="titulo-dificultad">Dificultad</h3>
          <img src="public/img/iconos/fire-color.svg" alt="Fire Icon">
          <img src="public/img/iconos/fire-color.svg" alt="Fire Icon">
          <img src="public/img/iconos/fire-color.svg" alt="Fire Icon">
          <img src="public/img/iconos/noto--fire.svg" alt="Fire Icon">
          <img src="public/img/iconos/noto--fire.svg" alt="Fire Icon">
      </div>
  </div>
  
  <div class="caja-descripcion"> 
      <h3 class="descripcion-practica">Crear una página web que muestre información básica sobre ustedes mismos. Esto incluirá su nombre, una foto de perfil, información de contacto y una breve descripción.</h3>
      <div class="caja-btn-practica">
          <a href="#" class="btn-ver-practica">Ver Práctica</a>
      </div>
  </div>
  
  </div>
  
  </section>`;
  console.log(event.target.id)
   contenedorDelContenido.innerHTML = practicas;
};


const contenidoInfo = `<div class="contenedor-elementos-info">

<a href="https://tinyurl.com/RivasDiscord" class="elemento-info link-url">
  <p class="nombre-link">Discord</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="#" class="elemento-info link-url" onclick="listaPracticas()" id="practicasReales" >
  <p class="nombre-link">Practicas Reales</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>

<a href="https://tinyurl.com/Documentos-ticoDev" class="elemento-info link-url">
  <p class="nombre-link">Documetos</p>
  <i class='bx bx-right-arrow-alt bx-flip-vertical flecha'></i>
</a>


</div>`;
contenedorDelContenido.innerHTML = contenidoInfo;

window.mostrarServicioCanva = () => {
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
          <p class="precio-servicio"><span class="simbolo-dolar">$</span>6,65</p>
          <p class="precio-descuento"><span>$</span>13,30</p>
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
          <p class="precio-servicio"><span class="simbolo-dolar">$</span>10,65</p>
          <p class="precio-descuento"><span>$</span>21,30</p>
        </div>
     
        <div class="caja-btn-pedir">
          <a href="https://tinyurl.com/canvaplanoro" class="btn-pedir-servicio-oro">Pedir</a>
        </div>
     
      </div>
     
      </section>`;

  contenedorDelContenido.innerHTML = planesCanva;
}

const contenidoServicios = `<a href="#" onclick="mostrarServicioCanva()" class="contenedor-elementos-servicio" id="planes-canva">
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

servicios.addEventListener("click", () => {
  contenedorDelContenido.innerHTML = contenidoServicios;
});

cajaJervicios.addEventListener("click", () => {
  contenedorDelContenido.innerHTML = contenidoServicios
});

cajaInfo.classList.toggle("navar-selecion");

let valorClick = 0;
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

 const recargarServicios = () => {
   if (valorClick == 1) {
    contenedorDelContenido.innerHTML = contenidoServicios;
   }
 };

 cajaJervicios.addEventListener("click", recargarServicios);
 
const recargarInfo = () => {
  if (valorClick == 0) {
   contenedorDelContenido.innerHTML = contenidoInfo;
  }
};

cajaInfo.addEventListener("click", recargarInfo);
 

//  export { contenedorDelContenido, contenidoInfo, cajaJervicios, cajaInfo, informacion, valorClick };

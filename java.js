const elementos = document.querySelectorAll('.animado');


function mostrarElementos() {
    const alturaPantalla = window.innerHeight;

    elementos.forEach(el => {
        const distancia = el.getBoundingClientRect().top;

        if (distancia < alturaPantalla - 100) {
            el.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', mostrarElementos);

window.addEventListener('load', mostrarElementos);

const botones = document.querySelectorAll('.btn-artesano');

botones.forEach(boton => {
    boton.addEventListener('mouseenter', () => {
        boton.style.transform = "scale(1.1)";
    });

    boton.addEventListener('mouseleave', () => {
        boton.style.transform = "scale(1)";
    });
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


function volverAtras() {
    if (document.referrer !== "") {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}


function cambiarColor(idImg, elemento, color) {
    const img = document.getElementById(idImg);
    let nuevaRuta = "";

    // MONSTRUOS
    if (idImg === "imgMonstruo") {
        if (color === "lila") nuevaRuta = "Imagenes/Productos/moustritoslila.jpeg";
        if (color === "rosa") nuevaRuta = "Imagenes/Productos/moustritosrosa.jpeg";
        if (color === "azul") nuevaRuta = "Imagenes/Productos/moustritosazul.jpeg";
    }

    // CONEJOS
    if (idImg === "imgConejo") {
        if (color === "gris") nuevaRuta = "Imagenes/Productos/conejogris.jpeg";
        if (color === "rosa") nuevaRuta = "Imagenes/Productos/conejorosa.jpeg";
        if (color === "arena") nuevaRuta = "Imagenes/Productos/conejoarena.jpeg";
    }
    
    // CARTUCHERA 
    if (idImg === "imgCartuchera") {
        if (color === "arcoiris") nuevaRuta = "Imagenes/Productos/cartucheraOjoturcoyarcoiris.jpeg";
        if (color === "sandia") nuevaRuta = "Imagenes/Productos/cartucheraOjoturcoySandia.jpeg";
        if (color === "mix") nuevaRuta = "Imagenes/Productos/cartucherasTodas.jpeg";
    }

    if (nuevaRuta !== "") {
        img.src = nuevaRuta;
    }

    const colores = elemento.parentElement.querySelectorAll(".color");
    colores.forEach(c => c.classList.remove("active"));
    elemento.classList.add("active");
}
    
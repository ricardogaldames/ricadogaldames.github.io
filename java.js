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
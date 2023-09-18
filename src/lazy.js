const isIntersecting = (entry) => {
    //Esto regresa true si esta dentro de la pantalla o false si no
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    // Es el div
    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;
    // Cargue imagen
    image.src = url;

    //des registra la imagen (unlisten) este deja de observar el nodo
    observer.unobserve(container);
}

//Este recibe una función donde espera ¿qué hacer con cada imagen?
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
    // Intersectation observador -> Observear (imagen)
    observer.observe(image);
}

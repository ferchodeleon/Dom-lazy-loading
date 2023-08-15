const isIntersecting = (entry) => {
    //Esto regresa tru si esta dentro de la pantalla
    return entry.isIntersecting;
}

const accion = (entry) => {
    const nodo = entry.target;
    console.log('En pantalla');

    //des registra la imagen (unlisten)
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (image) => {
    // Intersectation observador -> Observear (imagen)
    observer.observe(image);
}

// Inicialização do AOS (Animate On Scroll) com configurações Mobile-First
AOS.init({
    duration: 700,      // Duração ligeiramente mais rápida
    easing: 'ease-out', // Transição mais 'solta'
    once: false,        // Reanima ao rolar para baixo/cima
    mirror: true,       // Reanima ao rolar de volta para cima

    // O SEGREDO DO MOBILE: 
    // Offset baixo (50px). Isso significa que assim que o elemento
    // aparecer 50 pixels na tela (bem no rodapé), a animação dispara.
    offset: 50,
});
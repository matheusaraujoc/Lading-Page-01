// Inicialização do AOS
AOS.init({
    duration: 800,      // Tempo de duração da animação (suave)
    easing: 'ease-out', // Curva de velocidade
    once: false,        // Reanima ao rolar para cima/baixo
    mirror: true,       // Garante animação na volta
    offset: 20,         // ASSIM QUE ENTRAR NA TELA (20px), JÁ ANIMA. Resolve o atraso.
});
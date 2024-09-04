
//menu lateral
document.querySelectorAll('.menu-lateral a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.remove('open');
      document.querySelector('.imenu').style.opacity = '1';
    });
  });

  document.querySelector('.imenu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.add('open');
    document.querySelector('.imenu').style.opacity = '1';
  });

  document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.remove('open');
    document.querySelector('.imenu').style.opacity = '1';
  });


  //ativação de animações
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  

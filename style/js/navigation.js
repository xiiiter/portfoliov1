document.querySelector('.hamburger').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoes');
    
    // Alterna a classe 'open' para o hamburguer
    this.classList.toggle('open');
    
    // Verifica se as opções estão visíveis
    if (opcoes.classList.contains('aparecer')) {
      opcoes.classList.remove('aparecer'); // Remove a classe de aparecer
      opcoes.classList.add('sair'); // Adiciona a classe de saída
      setTimeout(() => {
        opcoes.style.display = 'none'; // Oculta o elemento após a animação
        opcoes.classList.remove('sair'); // Remove a classe de saída para o próximo clique
      }, 500); // Tempo igual à duração da animação
    } else {
      opcoes.style.display = 'block'; // Garante que o elemento seja exibido
      setTimeout(() => opcoes.classList.add('aparecer'), 10); // Adiciona a classe de aparecer
    }
  });
  
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
    // Oculta todas as imagens
    images.forEach(image => {
        image.style.display = 'none';
    });
    // Exibe a imagem com o índice especificado
    images[index].style.display = 'block';
}

function nextImage() {
    // Atualiza o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % images.length;
    // Exibe a próxima imagem
    showImage(currentIndex);
}

// Define o intervalo para mudar de imagem a cada 3 segundos
setInterval(nextImage, 1500);

const reviews = [
    { text: "Excelente hotel, ótimo serviço!", icon: "imagens/avatar-de-perfil.png"},
    { text: "Estadia maravilhosa, quartos confortáveis.", icon: "imagens/avatar-de-perfil.png" },
    { text: "Equipe muito atenciosa e prestativa.", icon: "imagens/avatar-de-perfil.png" },
    { text: "Com certeza voltarei novamente!", icon: "imagens/avatar-de-perfil.png" },
    { text: "Experiência incrível, recomendo a todos.", icon: "imagens/avatar-de-perfil.png" }
  ];
  
  let x = 0;
  const reviewTextElement = document.getElementById('reviewText');
  const reviewIconElement = document.querySelector('.rating img');
  
  function changeReview() {
    const currentReview = reviews[x];
    reviewTextElement.textContent = currentReview.text;
    reviewIconElement.src = currentReview.icon;
    x = (x + 1) % reviews.length;
  }
  
  // Iniciar com a primeira revisão
  changeReview();
  
  // Mudar a revisão a cada 5 segundos
  setInterval(changeReview, 5000);


  // Exibir o modal ao carregar a página
  window.onload = function() {
    document.getElementById('modal-login').style.display = 'block';
    document.getElementById('modal-background').style.display = 'block';
    document.body.classList.add('no-scroll');
};

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal-login').style.display = 'none';
    document.getElementById('modal-background').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

// Função para simular o login
function login() {
    // Aqui você pode adicionar lógica para verificar o login
    // Se o login for bem-sucedido, feche o modal
    closeModal();
    return false; // Evita que o formulário seja enviado
}
  






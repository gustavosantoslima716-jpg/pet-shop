document.addEventListener('DOMContentLoaded', () => {
    // Menu responsivo mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Fechar menu ao clicar em links
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }

    // Função para criar animação de patinha
    const pawEmojis = ['🐾', '🐶', '🐱', '✨', '💖'];

    function createPaw(x, y) {
        const paw = document.createElement('div');
        paw.className = 'click-paw';
        
        // Escolher emoji aleatório
        const randomEmoji = pawEmojis[Math.floor(Math.random() * pawEmojis.length)];
        paw.textContent = randomEmoji;

        // Posição ajustada ao clique
        paw.style.left = `${x - 15}px`;
        paw.style.top = `${y - 15}px`;

        // Rotação leve aleatória
        const randomRotate = (Math.random() - 0.5) * 50;
        paw.style.transform = `rotate(${randomRotate}deg)`;

        document.body.appendChild(paw);

        // Remover elemento após a animação
        setTimeout(() => {
            paw.remove();
        }, 800);
    }

    // Patinhas ao clicar em qualquer lugar da tela
    document.addEventListener('click', (e) => {
        // Evitar gerar patinhas caso clique direto em inputs ou botões específicos se necessário
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        createPaw(e.clientX, e.clientY);
    });

    // Botão de patinhas mágicas na seção dedicada
    const spawnPawsBtn = document.getElementById('spawnPawsBtn');
    if (spawnPawsBtn) {
        spawnPawsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const rect = spawnPawsBtn.getBoundingClientRect();
            
            // Gerar várias patinhas em rajada
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const randomX = rect.left + (Math.random() * rect.width);
                    const randomY = rect.top + (Math.random() * 60) - 30;
                    createPaw(randomX, randomY);
                }, i * 100);
            }
        });
    }

    // Simulação de envio do formulário de contato
    const petForm = document.getElementById('petForm');
    if (petForm) {
        petForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve para cuidar do seu pet! 🐾`);
            petForm.reset();
        });
    }
});
// Alternador de Modo Escuro / Claro
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Modo Escuro';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Modo Claro';
    }
});

// Contador de Curtidas nos Posts
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const countSpan = button.querySelector('.like-count');
        let currentLikes = parseInt(countSpan.textContent);
        countSpan.textContent = currentLikes + 1;
        
        button.style.transform = 'scale(1.1)';
        setTimeout(() => button.style.transform = 'scale(1)', 150);
    });
});
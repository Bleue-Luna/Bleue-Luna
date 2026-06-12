//JANELA ARRASTÁVEL
const janela = document.getElementById("sobre");
const barraTitulo = document.getElementById("header-janela");

if (janela && barraTitulo) {
    let isDragging = false;
    let offsetX, offsetY;

    barraTitulo.addEventListener("mousedown", (e) => {
        isDragging = true;
        const rect = janela.getBoundingClientRect();
        janela.style.transform = "none";
        janela.style.left = rect.left + "px";
        janela.style.top = rect.top + "px";
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        barraTitulo.style.cursor = "grabbing"; // Muda para a mãozinha a agarrar
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        
        // Move a janela livremente
        janela.style.left = (e.clientX - offsetX) + "px";
        janela.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        if (barraTitulo) {
            barraTitulo.style.cursor = "grab";
        }
    });
}

//clique pasta
const folderProjects = document.getElementById('folder-projects');

if (folderProjects) {
    folderProjects.addEventListener('click', () => {
        window.location.href = 'projetos.html';
    });
}
const iconLinks = document.getElementById('icon-links');

if (iconLinks) {
    iconLinks.addEventListener('click', () => {
        window.location.href = 'links.html';
    });
}

const iconTrash = document.getElementById('icon-trash');

if (iconTrash) {
    iconTrash.addEventListener('click', () => {
        // 1. Adiciona a classe que faz a animação acontecer
        iconTrash.classList.add('shake');
        
        // 2. Espera 300 milissegundos (o tempo exato da nossa animação no CSS) 
        // e remove a classe para que a lixeira possa tremer de novo no próximo clique!
        setTimeout(() => {
            iconTrash.classList.remove('shake');
        }, 300);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const confirmBtn = document.getElementById('confirmAge');
    const denyBtn = document.getElementById('denyAge');
    const initialBackground = document.getElementById('initialBackground');
    const landingContent = document.getElementById('landingContent');
    const videoFondo = document.getElementById('videoFondo');

    confirmBtn.addEventListener('click', function() {
        initialBackground.style.display = 'none'; // Oculta el fondo inicial y el cuadro
        landingContent.style.display = 'block'; // Muestra el contenido de la landing
        videoFondo.muted = false; // Desmutea el video
        videoFondo.play(); // Reproduce el video
    });

    denyBtn.addEventListener('click', function() {
        // Aquí puedes redirigir a otra página o mostrar un mensaje
        window.location.href = 'https://www.google.com';
    });
});
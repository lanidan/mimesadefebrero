
document.addEventListener("DOMContentLoaded",function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtn =document.getElementById('close-modal-btn')//boton de cerrar
    

    form.addEventListener('submit', function(event) {
        event.preventDefault() // Evita el envío del formulario para validar primero
        
        const emailInput = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailPattern.test(emailInput.value)) {
            // Mostrar mensaje de error si el correo es inválido
            showModal("Por favor, ingrese un correo válido.");
        } else {
            // Mostrar mensaje de éxito y limpiar campos si el correo es válido
            showModal ("¡Muchas gracias por comentar!");
            form.reset(); // Limpia los campos del formulario
        }
    });

    function showModal(message) {
        const modal=document.getElementById("modal");
        const modalMessage=document.getElementById("modal-message");
        const closeModalBtn =document.getElementById('close-modal-btn')

        modalMessage.textContent = message;
        modal.classList.add ("show");
        modal.style.display = "flex"; // Muestra el modal
    }

    function closeModal() {
        const modal=document.getElementById("modal");
        
        modal.classList.remove("show)");
        setTimeout(()=>{
            modal.style.display="none";//ocultar despues de la animacion
        },300)
        modal.style.display = "none"; // Oculta el modal
    }
    // Añadir evento al botón de cerrar
    closeModalBtn.addEventListener("click", closeModal);

    // Cierra el modal cuando el usuario hace clic fuera de él
    window.onclick = function(event) { 
        const modal=document.getElementById("modal");
        if (event.target === modal) {
            closeModal();
        }
    };
});
const exampleModal = document.getElementById('destroyModal')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget

        const textRecipient = button.getAttribute('data-bs-text')
        const idRecipient = button.getAttribute('data-bs-id')

        // Update the modal's content.
        const modalText = exampleModal.querySelector('#destroy-text')
        const modalId = exampleModal.querySelector('#destroy-id')

        modalText.textContent = `${textRecipient}`
        modalId.href = `${idRecipient}`
    })
}

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

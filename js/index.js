Swal.fire({
    title: '¿Es usted el gran Cuats?',
    icon: 'question',
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí!',
    cancelButtonText: 'No :('
    }).then((result) => {
    if (result.value) {
        Swal.fire(
        '¡Feliz cumpleaños!',
        'Feliz cumpleaños gran cuats.',
        'success'
        )
    } else {
        window.location.href = "https://www.google.com/"
    }
})
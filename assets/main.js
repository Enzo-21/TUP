( solvedExerciseAlert = () => {
    document.addEventListener('click', (e) => {
        if (e.target.className.includes('solved')) {
            swal({
                title: '🥳',
                text: "Este ejercicio ya está resuelto en el apunte",
                button: 'Vamo carajo'
            });
        }
    })
}
)();
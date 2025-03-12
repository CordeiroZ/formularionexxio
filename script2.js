const form = document.getElementById('meuFormulario');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    fetch('https://script.google.com/macros/s/AKfycbyGA6-Gxr9xsCnnjCQRvNC4OlhqD--Tj7XLdjQlTKD1JW3emG4VeTNWemG3oq9a_XVHxw/exec', {
        method: 'POST',
        body: data
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Erro ao enviar os dados.');
        }
    })
    .then(responseText => {
        if (responseText === 'success') {
            alert('Dados enviados com sucesso!');
            form.reset();
        } else {
            alert('Erro ao enviar os dados.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar os dados.');
    });
});
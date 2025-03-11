document.querySelector("#meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Captura os valores dos campos do formulário
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var celular = document.querySelector("#celular").value;
    var veiculo = document.querySelector("#veiculo").value;
    var anoVeiculo = document.querySelector("#ano_veiculo").value;

    // Cria o objeto com os dados do formulário
    var dados = {
        nome: nome,
        email: email,
        celular: celular,
        veiculo: veiculo,
        ano_veiculo: anoVeiculo
    };

    // Envia os dados para o Google Apps Script via POST
    fetch('https://script.google.com/macros/s/AKfycbytPdBudQ6VcHDoKelGyiAKdvyDZykoK5BThmsLlYPUWhoXKFZ1-LawhidaQDQO604L/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(dados)  // Envia os dados convertidos para JSON
    })
    .then(response => response.json())  // Converte a resposta para JSON
    .then(data => {
        console.log('Success:', data);  // Exibe o sucesso no console
        alert('Dados enviados com sucesso!');  // Exibe alerta de sucesso
    })
    .catch((error) => {
        console.error('Error:', error);  // Exibe o erro no console
        alert('Erro ao enviar os dados.');  // Exibe alerta de erro
    });

    // Limpa o formulário após o envio
    document.querySelector("#meuFormulario").reset();
});

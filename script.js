document.querySelector("#meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var celular = document.querySelector("#celular").value;
    var veiculo = document.querySelector("#veiculo").value;
    var anoVeiculo = document.querySelector("#ano_veiculo").value;

    var dados = {
        nome: nome,
        email: email,
        celular: celular,
        veiculo: veiculo,
        ano_veiculo: anoVeiculo
    };

    console.log("Dados do formulário:", dados);
    document.querySelector("#meuFormulario").reset(); // Limpa o formulário após exibir os dados
});
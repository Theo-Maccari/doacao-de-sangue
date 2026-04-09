document.getElementById("forms").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("email").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;

    if (!email.includes("@")) return alert("Email inválido")
    if (idade < 16) return alert("Idade inválida");
    if (peso < 50) return alert("Peso inválido");

    const dados = [];


});


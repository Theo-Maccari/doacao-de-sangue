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
    if (tipo == "0") return alert("Tipo sanguíneo inválido");

    let dados = [(
        nome,
        email,
        telefone,
        cidade,
        estado,
        peso,
        tipo
    )];

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome" + nome;

    document.getElementById("enviar").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome" + nome;
    alert("Formulário enviado!");

});


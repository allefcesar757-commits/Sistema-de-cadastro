
const form = document.getElementById("formCadastro");

const email = document.getElementById("email");
const senha = document.getElementById("senha");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");
const mensagem = document.getElementById("mensagem");


// Máscara do CPF
cpf.addEventListener("input", () => {

    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;

});


// Validação ao enviar
form.addEventListener("submit", function(event){

    event.preventDefault();

    let erro = false;


    // EMAIL
    if(email.value.includes("@")){
        email.classList.remove("invalido");
        email.classList.add("valido");
    }else{
        email.classList.remove("valido");
        email.classList.add("invalido");
        erro = true;
    }


    // SENHA
    if(senha.value.length > 6){
        senha.classList.remove("invalido");
        senha.classList.add("valido");
    }else{
        senha.classList.remove("valido");
        senha.classList.add("invalido");
        erro = true;
    }


    // TELEFONE
    let numeroTelefone = telefone.value.replace(/\D/g, "");

    if(numeroTelefone.length >= 11){
        telefone.classList.remove("invalido");
        telefone.classList.add("valido");
    }else{
        telefone.classList.remove("valido");
        telefone.classList.add("invalido");
        erro = true;
    }


    // CPF
    let numeroCpf = cpf.value.replace(/\D/g, "");

    if(numeroCpf.length === 11){
        cpf.classList.remove("invalido");
        cpf.classList.add("valido");
    }else{
        cpf.classList.remove("valido");
        cpf.classList.add("invalido");
        erro = true;
    }


    // Resultado final
    if(erro){
        mensagem.style.color = "red";
        mensagem.innerHTML =
        "Erro! Verifique os campos preenchidos.";
    }
    else{
        mensagem.style.color = "green";
        mensagem.innerHTML =
        "Cadastro realizado com sucesso!";

        form.reset();

        email.classList.remove("valido");
        senha.classList.remove("valido");
        telefone.classList.remove("valido");
        cpf.classList.remove("valido");
    }

});

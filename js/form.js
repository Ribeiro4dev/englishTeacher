let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputTelefone = document.getElementById("telefone");
let selectPlano = document.getElementById("plano");
let inputMensagem = document.getElementById("mensagem");
let btnSubmit = document.querySelector('input[type="submit"]');

inputNome.addEventListener("focus", () => {
    inputNome.style.backgroundColor = "#ee9600";
});

inputNome.addEventListener("blur", (e) => {    
    if (e.target.value === "") {
        e.target.style.backgroundColor = "#f0627f";
        alert("O campo não pode estar vazio.");
    }else if(!e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(/^[a-zA-Z ]+$/)){
        e.target.style.backgroundColor = "#f0627f";
        alert("O campo deve conter apenas letras.");

    }else if (e.target.value.length < 3) {
        e.target.style.backgroundColor = "#f0627f";
        alert("O campo deve conter no mínimo 3 caracteres.");
    } else if(e.target.value.length > 50) {
        e.target.style.backgroundColor = "#f0627f";
        alert("O campo deve conter no máximo 50 caracteres.");
        
    }else {
        
        e.target.style.backgroundColor = "#5ac45a";
    }
});

inputEmail.addEventListener("focus", () => {
    inputEmail.style.backgroundColor = "#ee9600";
});

inputEmail.addEventListener("blur", (e) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valor = e.target.value.trim();
    if (valor === "") {
        e.target.style.backgroundColor = "#f0627f";
        alert("O campo não pode estar vazio.");
    } else if (!regexEmail.test(valor)) {
        e.target.style.backgroundColor = "#f0627f";
        alert("Por favor, digite um e-mail válido.");
    } else {
        e.target.style.backgroundColor = "#5ac45a";
    }
});

inputTelefone.addEventListener("focus", () => {
    inputTelefone.style.backgroundColor = "#ee9600";
});

inputTelefone.addEventListener("blur", (e) => {      
    const valor = inputTelefone.value.trim();
    if (!valor.match(/^[0-9]+$/)) {        
        e.target.style.backgroundColor = "#f0627f";
        e.target.value = ""
        alert("O campo não pode estar vazio e deve conter apenas números."); 
    }else {
        inputTelefone.setCustomValidity("");
        e.target.style.backgroundColor = "#5ac45a";
    }
    
});

selectPlano.addEventListener("focus", () => {
    selectPlano.style.backgroundColor = "#ee9600";
});

selectPlano.addEventListener("blur", (e) => {    
    const valor = document.querySelector("select[name='planos']").value;    
    if (valor === "") {
        e.target.style.backgroundColor = "#f0627f";        
        alert("Por favor, selecione um plano.");        
    }else {
        e.target.style.backgroundColor = "#5ac45a";
    }
});

inputMensagem.addEventListener("focus", () => {
    inputMensagem.style.backgroundColor = "#ee9600";
});

inputMensagem.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "";
});

btnSubmit.addEventListener("click", (e) => {
    const nomeValido = (inputNome.value.trim() !== "" && inputNome.value.length >= 3 && inputNome.value.length <= 50 && /^[a-zA-Z ]+$/.test(inputNome.value));
    const emailValido = (inputEmail.value.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value));
    const telefoneValido = (inputTelefone.value.trim() !== "" && /^[0-9]+$/.test(inputTelefone.value));
    const planoValido = (document.querySelector("select[name='planos']").value.trim() !== "");
    const mensagemValida = true;

    if (!(nomeValido && emailValido && telefoneValido && planoValido && mensagemValida)) {
        e.preventDefault();
        alert("Por favor, corrija os erros no formulário antes de enviar.");
    } else {
        e.preventDefault();
        alert("Formulário enviado com sucesso!");
        window.location.href = 'index.html';
    }
});

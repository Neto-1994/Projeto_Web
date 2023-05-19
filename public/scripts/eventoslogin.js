var campos = document.querySelectorAll("[required]");

function ValidarCampo(campo) {
    function VerificarErros() {
        let foundError = false;
        for (let error in campo.validity) {
            if (campo.validity[error] && !campo.validity.valid) {
                foundError = error;
            }
        }
        return foundError;
    }

    function MensagemCustomizada(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha esse campo."
            },
            password: {
                valueMissing: "Senha obrigatória."
            }
        }
        return messages[campo.type][typeError];
    }

    function setMensagemCustomizada(message) {
        const spanError = campo.parentNode.querySelector("span.error");
        if (message) {
            spanError.classList.add("active");
            spanError.innerHTML = message;
        } else {
            spanError.classList.remove("active");
            spanError.innerHTML = "";
        }
    }
    return function () {
        const error = VerificarErros();
        if (error) {
            const message = MensagemCustomizada(error);
            setMensagemCustomizada(message);
        } else {
            setMensagemCustomizada();
        }
    }
}

function CustomizarValidacao(event) {
    const campo = event.target;
    const validacao = ValidarCampo(campo);
    validacao()
}

for (var campo of campos) {
    campo.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault();
        CustomizarValidacao(event)
    })
    campo.addEventListener("blur", CustomizarValidacao)
}
document.querySelector("form").addEventListener("submit");

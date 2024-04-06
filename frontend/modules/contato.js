import validator from "validator";

export default class Agenda {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate();
        });
    }

    validate() {
        const nomeInput = this.form.querySelector('input[name="nome"]');
        // const sobrenomeInput = this.form.querySelector('input[name="sobrenome"]');
        const emailInput = this.form.querySelector('input[name="email"]');
        const telefoneInput = this.form.querySelector('input[name="telefone"]');
        let error = false;

        for (let errorText of this.form.querySelectorAll(".text-danger")) {
            errorText.remove();
        }

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'E-mail invalido');
            error = true;
        }

        if (!nomeInput.value) {
            this.createError(nomeInput, 'Nome é um campo obrigatorio');
            error = true;
        }

        if (!emailInput.value && !telefoneInput.value) {
            this.createError(emailInput, 'Necessario ter email ou telefone');
            this.createError(telefoneInput, 'Necessario ter email ou telefone');
            error = true;
        }

        if (!error) this.form.submit();
    }

    createError(element, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add("text-danger");
        element.insertAdjacentElement('afterend', div);
    }
}

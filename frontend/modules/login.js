import validator from "validator";

export default class Login {
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
            this.validate(e.target);
        });
    }

    validate(element) {
        const emailInput = element.querySelector('input[name="email"]');
        const passwordInput = element.querySelector('input[name="password"]');
        let error = false;

        for (let errorText of element.querySelectorAll(".text-danger")) {
            errorText.remove();
        }

        if (!validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'E-mail invalido.');
            error = true;
        }

        if (passwordInput.value.length < 6 || passwordInput.value.length > 20) {
            this.createError(passwordInput, 'Senha precisa ter entre 6 e 20 caracteres.');
            error = true;
        }

        if (!error) element.submit();
    }

    createError(element, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add("text-danger");
        element.insertAdjacentElement('afterend', div);
    }
}

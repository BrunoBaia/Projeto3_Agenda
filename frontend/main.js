import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import Login from './modules/login.js';
import Agenda from './modules/contato.js';

// Validaçao front-end do formulario de cadastro/login
const cadastro = new Login('.form-cadastro');
const login = new Login('.form-login');
cadastro.init();
login.init();

// Validaçao front-end do formulario da agenda
const agenda = new Agenda('.form-agenda');
agenda.init();

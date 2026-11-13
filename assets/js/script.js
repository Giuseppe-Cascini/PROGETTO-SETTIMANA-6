// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

//reset del form
const formContattaci = document.querySelector('#formContattaci');
formContattaci.addEventListener('submit', (e) => {
    e.preventDefault();
    formContattaci.reset();
});
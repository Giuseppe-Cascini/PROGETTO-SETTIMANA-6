// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.
const LAVORI = [
    {
        id: 1,
        titolo: 'Villa in campagna',
        anno: 2009,
        categoria: 'residenziale',
        immagine: ''
    },
    {
        id: 2,
        titolo: 'Attico a City Life',
        anno: 2026,
        categoria: 'interior design',
        immagine: ''
    },
]




//reset del form
const formContattaci = document.querySelector('#formContattaci');
formContattaci.addEventListener('submit', (e) => {
    e.preventDefault();
    formContattaci.reset();
});
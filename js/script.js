// HARTMANN Logistik GmbH - JavaScript
// Einfaches Script fuer Navigation und Formulare

// Navigation Dropdown (fuer aeltere Browser-Kompatibilitaet)
document.addEventListener('DOMContentLoaded', function() {

    // Aktive Seite in Navigation markieren
    var currentPage = window.location.pathname.split('/').pop();
    var navLinks = document.querySelectorAll('#nav a');
    for (var i = 0; i < navLinks.length; i++) {
        var href = navLinks[i].getAttribute('href');
        if (href && href !== '#' && currentPage === href.split('/').pop()) {
            var li = navLinks[i].parentNode;
            li.className += ' active';
        }
    }

    // Kontaktformular Validierung
    var contactForm = document.getElementById('kontaktformular');
    if (contactForm) {
        contactForm.onsubmit = function() {
            var name = document.getElementById('f-name');
            var email = document.getElementById('f-email');
            var nachricht = document.getElementById('f-nachricht');
            var errors = [];

            if (!name || name.value.trim() === '') errors.push('Bitte geben Sie Ihren Namen ein.');
            if (!email || email.value.trim() === '' || email.value.indexOf('@') === -1) errors.push('Bitte geben Sie eine gueltige E-Mail-Adresse ein.');
            if (!nachricht || nachricht.value.trim() === '') errors.push('Bitte geben Sie eine Nachricht ein.');

            if (errors.length > 0) {
                alert('Bitte korrigieren Sie folgende Fehler:\n\n' + errors.join('\n'));
                return false;
            }

            alert('Vielen Dank fuer Ihre Nachricht!\nWir melden uns schnellstmoeglich bei Ihnen.');
            return false; // Demo: kein echter Submit
        };
    }

    // Bewerbungsformular Validierung
    var bewerbungForm = document.getElementById('bewerbungsformular');
    if (bewerbungForm) {
        bewerbungForm.onsubmit = function() {
            var name = document.getElementById('b-name');
            var email = document.getElementById('b-email');
            if (!name || name.value.trim() === '' || !email || email.value.trim() === '') {
                alert('Bitte fuellen Sie alle Pflichtfelder aus.');
                return false;
            }
            alert('Vielen Dank fuer Ihre Bewerbung!\nWir werden uns zeitnah bei Ihnen melden.');
            return false;
        };
    }

    // Anfrage-Formular auf index.html
    var anfrageForm = document.getElementById('schnellanfrage');
    if (anfrageForm) {
        anfrageForm.onsubmit = function() {
            alert('Vielen Dank fuer Ihre Anfrage! Ein Mitarbeiter wird sich umgehend bei Ihnen melden.');
            return false;
        };
    }

});

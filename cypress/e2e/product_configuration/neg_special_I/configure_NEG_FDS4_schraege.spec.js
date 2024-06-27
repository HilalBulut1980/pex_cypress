var configurator = require("../../../support/configurator_NEG_specialForms.js");

/*var test = {
    "name": "Neg.PEX-FDS4-schräge",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "1000",
    "hoehe_links": "1000",
    "hoehe_links_new": "1000",
    "ausrichtung": "links",
    "message": "Die sich ergebende Schräge darf maximal 2300 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}*/

describe('Testing error messages - FDS4 schräge', () => {

    //configurator.configure_NEG_specialForms(test)

    // it is not possible to create a 'Schräge' of more than 1414 mm as max HxB is 1000x1000
})
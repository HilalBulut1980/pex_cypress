
var configurator = require("../../../support/configurator_NEG_specialForms.js");

/*var test = {
    "name": "Neg.PEX-SD2-schraege",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd2",
    "breite": "1600",
    "hoehe": "1000",
    "ausrichtung": "links",
    "message": "Die sich ergebende Schräge darf maximal 2300 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}*/

describe('Testing error messages - SD2 schraege', () => {
    //configurator.configure_NEG_specialForms(test)

    // it is not possible to create a 'Schräge' of more than 2263 mm as max HxB is 1600x1600
})


// 
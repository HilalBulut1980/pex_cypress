var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-schraege_wabe",
    "product": "Duo 4012",
    "stoff_url": "duo-4012",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "1700",
    "hoehe_links": "2300",
    "hoehe_rechts": "400",
    "hoehe_rechts_new": "1000",
    "ausrichtung": "links",
    "message": "Die sich ergebende Schräge darf maximal 2200 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}


describe('Testing error messages - FS2 schräge wabe', () => {
    configurator.configure_NEG_specialForms(test)
})
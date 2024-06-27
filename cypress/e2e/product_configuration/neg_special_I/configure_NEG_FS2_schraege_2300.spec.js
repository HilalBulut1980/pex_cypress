var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-schraege",
    "product": "Eleganza 4300",
    "stoff_url": "eleganza-4300",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "1600",
    "hoehe_links": "2300",
    "hoehe_rechts": "400",
    "hoehe_rechts_new": "700",
    "ausrichtung": "links",
    "message": "Die sich ergebende Schräge darf maximal 2300 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}



describe('Testing error messages - FS2 schräge', () => {
    configurator.configure_NEG_specialForms(test)
})

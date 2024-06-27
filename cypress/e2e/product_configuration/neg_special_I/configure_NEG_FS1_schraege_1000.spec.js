
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS1-schraege",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "800",
    "hoehe_links": "2500",
    "hoehe_rechts": "1800",
    "hoehe_rechts_new": "2000",
    "ausrichtung": "links",
    "message": "Die sich ergebende Schräge darf maximal 1000 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - FS1 schräge 1000', () => {
   configurator.configure_NEG_specialForms(test)
})

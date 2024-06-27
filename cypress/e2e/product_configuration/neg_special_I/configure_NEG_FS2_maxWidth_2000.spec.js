
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-max.breite_2000",
    "product": "Lecce 4911",
    "stoff_url": "Lecce-4911",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "2200",
    "breite_new": "2000",
    "hoehe_links": "1200",
    "hoehe_rechts": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Testing error messages - FS2 max. width 2000', () => {
   configurator.configure_NEG_specialForms(test)
})

// --> max. Breite ist auch abhähing von der Stoffbreite


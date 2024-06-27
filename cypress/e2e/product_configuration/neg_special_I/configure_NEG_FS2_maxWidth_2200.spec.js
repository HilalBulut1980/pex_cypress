
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-max.breite_2200",
    "product": "Boteh 4587",
    "stoff_url": "Boteh-4587",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "3000",
    "breite_new": "2200",
    "hoehe_links": "1750",
    "hoehe_rechts": "1100",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Testing error messages - FS2 max. width 2200', () => {
   configurator.configure_NEG_specialForms(test)
})

// --> max. Breitre ist auch abhähing von der Stoffbreite

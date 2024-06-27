
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-max.breite_2100",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "2300",
    "breite_new": "1700",
    "hoehe_links": "2000",
    "hoehe_rechts": "500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2100 mm ein."
}

describe('Testing error messages - FS2 max. width 2100', () => {
   configurator.configure_NEG_specialForms(test)
})

// --> max. Breitre ist auch abhähing von der Stoffbreite

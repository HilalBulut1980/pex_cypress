
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS1-min.hoehe_klein_links",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "500",
    "hoehe_links": "80",
    "hoehe_links_new": "100",
    "hoehe_rechts": "450",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2600 mm ein."
}

describe('Testing error messages - FS1 min. small height left 100', () => {
   configurator.configure_NEG_specialForms(test)
})


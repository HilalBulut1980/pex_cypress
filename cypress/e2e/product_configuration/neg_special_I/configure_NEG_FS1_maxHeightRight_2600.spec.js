var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS1-max.hoehe_rechts",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "500",
    "hoehe_links": "2500",
    "hoehe_rechts": "2800",
    "hoehe_rechts_new": "2600",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

describe('Testing error messages - FS1 max. height right 2600', () => {
    configurator.configure_NEG_specialForms(test)
})
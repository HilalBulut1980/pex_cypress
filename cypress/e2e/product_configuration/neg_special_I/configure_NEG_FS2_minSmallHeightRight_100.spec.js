
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-min.hoehe_klein_rechts",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "500",
    "hoehe_links": "450",
    "hoehe_rechts": "80",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2600 mm ein."
}

describe('Testing error messages - FS2 min. small height right 100', () => {
   configurator.configure_NEG_specialForms(test)
})


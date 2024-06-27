
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-min.breite_300",
    "product": "Bozen 1161",
    "stoff_url": "bozen-1161",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "250",
    "breite_new": "300",
    "hoehe_links": "750",
    "hoehe_rechts": "500",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2170 mm ein."  //cause Bozen-116's width is 217cm
}

describe('Testing error messages - FS2 min. width 300', () => {
   configurator.configure_NEG_specialForms(test)
})


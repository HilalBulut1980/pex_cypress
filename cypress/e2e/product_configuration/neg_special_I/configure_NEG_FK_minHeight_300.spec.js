var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FK-min.hoehe",
    "product": "Syrakus 4215",
    "stoff_url": "Syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fk",
    "hoehe": "200",
    "hoehe_new": "300",
    "breite": "2000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

describe('Testing error messages - FK min. height 300', () => {
    configurator.configure_NEG_specialForms(test)
})

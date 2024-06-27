
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-SD3-max.hoehe",
    "product": "Brescia 1147",
    "stoff_url": "Brescia-1147",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd3",
    "hoehe": "2100",
    "hoehe_new": "2000",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2000 mm ein."
}

describe('Testing error messages - SD3 max. height 2000', () => {
    configurator.configure_NEG_specialForms(test)
})


var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS3-min.hoehe",
    "product": "Malia 4418",
    "stoff_url": "Malia-4418",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs3",
    "hoehe": "190",
    "hoehe_new": "200",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

describe('Testing error messages - VS3 min. height 200', () => {
    configurator.configure_NEG_specialForms(test)
})
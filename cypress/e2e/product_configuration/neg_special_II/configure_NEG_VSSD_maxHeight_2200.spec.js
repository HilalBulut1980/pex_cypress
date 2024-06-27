var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VSSD-hoehe",
    "product": "Brescia 1147",
    "stoff_url": "Brescia-1147",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vssd",
    "hoehe": "3000",
    "hoehe_new": "2200",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

describe('Testing error messages - VS SD max. height 2200', () => {
    configurator.configure_NEG_specialForms(test)
})

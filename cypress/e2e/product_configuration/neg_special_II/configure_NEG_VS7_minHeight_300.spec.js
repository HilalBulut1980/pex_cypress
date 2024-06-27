var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS7-min.hoehe_300",
    "product": "Alegria 4570",
    "stoff_url": "Alegria-4570",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "250",
    "hoehe_new": "300",
    "breite_oben": "100",
    "breite_unten": "500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Testing error messages - VS7 min. height 300', () => {

   configurator.configure_NEG_specialForms(test)
})


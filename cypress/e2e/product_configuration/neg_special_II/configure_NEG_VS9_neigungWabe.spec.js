var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS9-neigung_wabe",
    "product": "Wabe Object 4124",
    "stoff_url": "wabe-object-4124",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "300",
    "hoehe_new": "500",
    "breite": "2500",
    "breite_new": "500",
    "message": "Der Neigungswinkel muss zwischen 25° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - VS9 neigung wabe', () => {
    configurator.configure_NEG_specialForms(test)
})

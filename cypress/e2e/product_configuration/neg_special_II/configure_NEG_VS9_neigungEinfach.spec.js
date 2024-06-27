var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS9-neigung",
    "product": "Riva 2014",
    "stoff_url": "riva-2014",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "300",
    "hoehe_new": "500",
    "breite": "2500",
    "breite_new": "500",
    "message": "Der Neigungswinkel muss zwischen 15° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - VS9 max. neigung', () => {
    configurator.configure_NEG_specialForms(test)
})

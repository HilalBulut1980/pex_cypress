var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS3-neigung",
    "product": "Riva 2014",
    "stoff_url": "riva-2014",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "500",
    "breite_new": "800",
    "hoehe": "2500",
    "hoehe_new": "950",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 5° und 50° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - FDS3 neigung', () => {
    configurator.configure_NEG_specialForms(test)
})

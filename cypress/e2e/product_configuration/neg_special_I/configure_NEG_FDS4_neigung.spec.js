var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS4-neigung",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "500",
    "hoehe": "2500",
    "hoehe_new": "500",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 5° und 45° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - FDS4 neigung', () => {
    configurator.configure_NEG_specialForms(test)
})

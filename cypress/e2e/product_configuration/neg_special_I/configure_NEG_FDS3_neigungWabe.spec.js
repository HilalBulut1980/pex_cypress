var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FDS3-neigung_wabe",
    "product": "Wabe Object 4124",
    "stoff_url": "wabe-object-4124",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "500",
    "hoehe": "2500",
    "hoehe_new": "400",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 5° und 40° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - FDS3 neigung wabe', () => {
    configurator.configure_NEG_specialForms(test)
})
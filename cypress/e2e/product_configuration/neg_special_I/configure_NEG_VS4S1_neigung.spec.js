var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S1-neigung",
    "product": "Luna 4177",
    "stoff_url": "Luna-4177",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "700",
    "hoehe_links": "1700",
    "hoehe_rechts": "300",
    "hoehe_rechts_new": "600",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 5° und 60° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - VS4S1 neigung', () => {

    configurator.configure_NEG_specialForms(test)
})

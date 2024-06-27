var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-PL40-neigung",
    "product": "Luna 4177",
    "stoff_url": "Luna-4177",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "breite": "1200",
    "hoehe_links": "3900",
    "hoehe_rechts": "1500",
    "hoehe_rechts_new": "2000",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 5° und 60° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - PL40 neigung', () => {
    configurator.configure_NEG_specialForms(test)
})
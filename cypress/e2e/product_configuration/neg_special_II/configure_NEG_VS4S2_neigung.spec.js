var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S2-neigung",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s2",
    "breite": "1000",
    "hoehe_links": "2000",
    "hoehe_rechts": "1200",
    "hoehe_rechts_new": "1300",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 15° und 35° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - VS4S2 neigung', () => {
   configurator.configure_NEG_specialForms(test)
})



var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS1-neigung",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "300",
    "breite_new": "800",
    "hoehe_links": "2500",
    "hoehe_rechts": "2000",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 5° und 35° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Testing error messages - FS1 neigung', () => {
   configurator.configure_NEG_specialForms(test)
})

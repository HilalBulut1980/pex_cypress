var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5-neigung",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "2500",
    "hoehe_links_new": "2000",
    "hoehe_rechts": "300",
    "hoehe_rechts_new": "800",
    "breite_oben": "200",
    "breite_unten": "500",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 15° und 80° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}


describe('Testing error messages - VS5 neigung', () => {
  configurator.configure_NEG_specialForms(test)
})

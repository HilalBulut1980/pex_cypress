var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS4S2-ausrichtung_links",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s2",
    "breite": "1000",
    "hoehe_links": "1000",
    "hoehe_rechts": "300",
    "ausrichtung": "rechts",
    "ausrichtung_new": "links",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder Sie wechseln die Ausrichtung des Plissee (siehe rechts)."
}

describe('Testing error messages - VS4S2 direction right to left', () => {
    configurator.configure_NEG_specialForms(test)
})

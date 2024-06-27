
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-ausrichtung_rechts",
    "product": "Syrakus 4220",
    "stoff_url": "Syrakus-4220",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "800",
    "hoehe_links": "2000",
    "hoehe_rechts": "2100",
    "ausrichtung": "links",
    "ausrichtung_new": "rechts",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plissee (siehe rechts)."
}

describe('Testing error messages - FS2 ausrichtung links nach rechts', () => {
   configurator.configure_NEG_specialForms(test)
})
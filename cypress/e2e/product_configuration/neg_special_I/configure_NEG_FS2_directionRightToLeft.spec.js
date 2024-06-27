
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-ausrichtung_links",
    "product": "Syrakus 4220",
    "stoff_url": "Syrakus-4220",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "800",
    "hoehe_links": "2100",
    "hoehe_rechts": "2000",
    "ausrichtung": "rechts",
    "ausrichtung_new": "links",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder Sie wechseln die Ausrichtung des Plissee (siehe rechts)."
}

describe('Testing error messages - FS2 ausrichtung rechts nach links', () => {
   configurator.configure_NEG_specialForms(test)
})
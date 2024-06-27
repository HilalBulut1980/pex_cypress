
var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-FS2-max.breite_2050",
    "product": "Cremona 1090",
    "stoff_url": "Cremona-1090",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "2100",
    "breite_new": "2050",
    "hoehe_links": "1300",
    "hoehe_rechts": "800",
   "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2050 mm ein."
}

describe('Testing error messages - FS2 max. width 2050', () => {
   configurator.configure_NEG_specialForms(test)
})


// --> max. Breitre ist auch abhähing von der Stoffbreite


var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS5SD-hoehe_klein_rechts",
    "product": "Tarent 1277",
    "stoff_url": "Tarent-1277",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "1500",
    "hoehe_rechts": "80",
    "hoehe_rechts_new": "100",
    "breite_oben": "200",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein."
}


describe('Testing error messages - VS5 SD min. small height right 100', () => {
   configurator.configure_NEG_specialForms(test)
})

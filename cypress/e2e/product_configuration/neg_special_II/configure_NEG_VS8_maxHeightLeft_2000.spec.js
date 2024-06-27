var configurator = require("../../../support/configurator_NEG_specialForms.js");

var test = {
    "name": "Neg.PEX-VS8-hoehe_links_2000",
    "product": "Alegria 4570",
    "stoff_url": "Alegria-4570",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "2200",
    "hoehe_new": "2000",
    "breite_oben": "100",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Testing error messages - VS8 max. height left 2000', () => {

   configurator.configure_NEG_specialForms(test)
})

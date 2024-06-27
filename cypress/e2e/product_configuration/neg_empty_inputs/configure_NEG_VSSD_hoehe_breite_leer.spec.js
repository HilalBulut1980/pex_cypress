var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-vssd_width_height_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "rectangle",
    "plisseetyp": "vssd",
    "stoffgruppe": "Bast",
    "stoffnummer": "4141",
    "hoehe_new": "1000",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein.",
    "message2": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1000 mm ein."
}

describe('Testing error messages - VSSD - empty height and width', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_SD(test.url, test.tab, test.shape, test.plisseetyp, test.stoffgruppe, test.stoffnummer, test.hoehe, test.hoehe_new, test.hoehe_links, test.hoehe_links_new, test.hoehe_rechts, test.hoehe_rechts_new, test.hoehe_gesamt, test.hoehe_gesamt_new, test.hoehe_teil, test.hoehe_teil_new, test.breite, test.breite_new, test.breite_unten, test.breite_unten_new, test.breite_oben, test.breite_oben_new, test.message, test.message2)

    })
})
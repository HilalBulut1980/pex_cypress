
var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-vs9_width_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "1000",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

describe('Testing error messages - VS9 - empty width', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_SD(test.url, test.tab, test.shape, test.plisseetyp, test.stoffgruppe, test.stoffnummer, test.hoehe, test.hoehe_new, test.hoehe_links, test.hoehe_links_new, test.hoehe_rechts, test.hoehe_rechts_new, test.hoehe_gesamt, test.hoehe_gesamt_new, test.hoehe_teil, test.hoehe_teil_new, test.breite, test.breite_new, test.breite_unten, test.breite_unten_new, test.breite_oben, test.breite_oben_new, test.message, test.message2)

    })
})
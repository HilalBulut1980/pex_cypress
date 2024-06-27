var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-vs6sd_heights_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "hexagon",
    "plisseetyp": "vs6sd",
    "hoehe_gesamt_new": "2000",
    "hoehe_teil_new": "1500",
    "breite_oben": "500",
    "breite_unten": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein.",
    "message2": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein.",
}

describe('Testing error messages - VS6SD - empty heights', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_SD(test.url, test.tab, test.shape, test.plisseetyp, test.stoffgruppe, test.stoffnummer, test.hoehe, test.hoehe_new, test.hoehe_links, test.hoehe_links_new, test.hoehe_rechts, test.hoehe_rechts_new, test.hoehe_gesamt, test.hoehe_gesamt_new, test.hoehe_teil, test.hoehe_teil_new, test.breite, test.breite_new, test.breite_unten, test.breite_unten_new, test.breite_oben, test.breite_oben_new, test.message, test.message2)

    })
})
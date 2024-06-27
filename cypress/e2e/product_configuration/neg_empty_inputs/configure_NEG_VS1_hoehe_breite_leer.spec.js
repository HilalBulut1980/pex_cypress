var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-vs1_width_height_empty",
    "url": "bologna-2028",
    "tab": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe_new": "1000",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein.",
    "message2": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1500 mm ein."
}

describe('Testing error messages - VS1 - empty height and width', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_SF(test.url, test.tab, test.shape, test.plisseetyp, test.hoehe, test.hoehe_new, test.breite, test.breite_new,  test.message, test.message2)

    })
})
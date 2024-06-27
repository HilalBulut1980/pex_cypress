var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-vs1_width_empty",
    "url": "bologna-2028",
    "tab": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "1500",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}

describe('Testing error messages - VS2 - empty width', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_SF(test.url, test.tab, test.shape, test.plisseetyp, test.hoehe, test.hoehe_new, test.breite, test.breite_new,  test.message, test.message2)

    })
})
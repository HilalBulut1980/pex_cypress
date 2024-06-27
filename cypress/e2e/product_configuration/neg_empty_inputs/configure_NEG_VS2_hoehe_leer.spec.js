
var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-vs1_height_empty",
    "url": "bologna-2028",
    "tab": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe_new": "1200",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

describe('Testing error messages - VS2 - empty height', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_SF(test.url, test.tab, test.shape, test.plisseetyp, test.hoehe, test.hoehe_new, test.breite, test.breite_new,  test.message, test.message2)

    })
})
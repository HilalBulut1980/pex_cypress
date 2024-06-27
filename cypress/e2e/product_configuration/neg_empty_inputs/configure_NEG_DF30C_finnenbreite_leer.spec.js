var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-fdf30C_finnenwidth_empty",
    "url": "bologna-2028",
    "tab": "Dachfenster",
    "plisseetyp": "df30c",
    "stoffgruppe": "Bast",
    "stoffnummer": "4141",
    "glashoehe": "1500",
    "glasbreite": "1000",
    "falz": "50",
    "finnenhoehe": "1500",
    "finnenbreite_new": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 1500 mm ein."
}

describe('Testing error messages - DF30C - empty finnenwidth', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_DF(test.url, test.tab, test.plisseetyp, test.stoffgruppe, test.stoffnummer, test.glasbreite, test.glashoehe, test.falz, test.finnenbreite, test.finnenhoehe, test.glasbreite_new, test.glashoehe_new, test.falz_new, test.finnenbreite_new, test.finnenhoehe_new, test.message)

    })
})
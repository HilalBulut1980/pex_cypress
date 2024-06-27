var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-fdf20C_glasswidth_empty",
    "url": "bologna-2028",
    "tab": "Dachfenster",
    "plisseetyp": "df20c",
    "glashoehe_new": "1500",
    "glasbreite": "1000",
    "falz": "50",
    "finnenhoehe": "1500",
    "finnenbreite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

describe('Testing error messages - DF20C - empty glassheight', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_DF(test.url, test.tab, test.plisseetyp, test.stoffgruppe, test.stoffnummer, test.glasbreite, test.glashoehe, test.falz, test.finnenbreite, test.finnenhoehe, test.glasbreite_new, test.glashoehe_new, test.falz_new, test.finnenbreite_new, test.finnenhoehe_new, test.message)

    })
})